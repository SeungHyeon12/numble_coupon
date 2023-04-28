import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { IssueCouponUsecase } from '../port/in/usecase/issue.coupon.usecase';
import { IssueCouponDomainService } from 'src/coupon_service/domain/coupon.issurance/service/coupon.issue.domain.service';
import { CouponIssurance } from 'src/coupon_service/domain/coupon.issurance/coupon.issurance.entity';
import { IssueCouponCommand } from '../dto/command/isssue.coupon.command';
import { IssuranceStoreOutPort } from '../port/out/issurance.store.outport ';
import { CouponReaderOutPort } from '../port/out/coupon.reader.outport';
import { IssuranceReaderOutPort } from '../port/out/issurance.reader.outport';

@Injectable()
export class IssueCouponService implements IssueCouponUsecase {
  constructor(
    private readonly issueCouponDomainService: IssueCouponDomainService,

    @Inject('ISSURANCE_STORE_OUTPORT')
    private readonly issuranceStoreAdaptor: IssuranceStoreOutPort,

    @Inject('ISSURANCE_READER_OUTPORT')
    private readonly issuranceReaderAdaptor: IssuranceReaderOutPort,

    @Inject('COUPON_READER_OUTPORT')
    private readonly couponReaderAdaptor: CouponReaderOutPort,
  ) {}

  //transaction 추가
  async issueCoupon(command: IssueCouponCommand) {
    const coupon = await this.couponReaderAdaptor.getByCouponUuid(
      command.couponUuid,
    );
    if (!coupon) throw new ConflictException('해당하는 쿠폰이 없습니다');
    const latestIssuerCouponIssurance =
      await this.issuranceReaderAdaptor.getIssuranceByIssuerUuidAndCouponUuid(
        command.issuerUuid,
        command.couponUuid,
      );

    this.issueCouponDomainService.checkAlreadyIssueCoupon(
      latestIssuerCouponIssurance,
      command.couponIssuedStartDate,
    );
    this.issueCouponDomainService.checkCreateCouponExpired(
      coupon,
      command.couponIssuedStartDate,
    );

    //현재 이슈어가 아닌 쿠폰자체의 마지막 count 를 세기위한값
    const lastCouponIssurance =
      await this.issuranceReaderAdaptor.getIssuranceByCouponUuid(
        command.couponUuid,
      );

    const nextCount = this.issueCouponDomainService.calculateCouponCount(
      coupon,
      lastCouponIssurance,
    );
    // 현재 발급받을 issurance
    const currentIssurance = CouponIssurance.IssueCoupon({
      ...command,
      couponUuid: coupon.getCouponUuid().getValue(),
      issueCount: nextCount,
    });
    this.issueCouponDomainService.calcualteValidateTime(
      currentIssurance,
      coupon,
    );
    await this.issuranceStoreAdaptor.createIssuer(command.issuerUuid);
    this.issuranceStoreAdaptor.create(currentIssurance);
  }
}
