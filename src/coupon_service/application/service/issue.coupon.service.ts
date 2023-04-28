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
      command.couonUuid,
    );
    if (!coupon) throw new ConflictException('해당하는 쿠폰이 없습니다');
    const latestCouponIssurance =
      await this.issuranceReaderAdaptor.getIssuranceByIssuerUuidAndCouponUuid(
        command.issuerUuid,
        command.couonUuid,
      );
    this.issueCouponDomainService.checkAlreadyIssueCoupon(
      latestCouponIssurance,
      command.couponIssuedStartDate,
    );
    this.issueCouponDomainService.checkCreateCouponExpired(
      coupon,
      command.couponIssuedStartDate,
    );
    // 현재 발급받을 issurance
    const currentIssurance = CouponIssurance.IssueCoupon({
      ...command,
      couponUuid: coupon.getCouponUuid().getValue(),
    });
    this.issueCouponDomainService.calcualteValidateTime(
      currentIssurance,
      coupon,
    );
    await this.issuranceStoreAdaptor.createIssuer(command.issuerUuid);
    this.issuranceStoreAdaptor.create(currentIssurance);
  }
}
