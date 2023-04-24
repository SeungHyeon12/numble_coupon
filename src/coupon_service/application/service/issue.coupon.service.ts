import { Inject, Injectable } from '@nestjs/common';
import { IssueCouponUsecase } from '../port/in/usecase/issue.coupon.usecase';
import { IssueCouponDomainService } from 'src/coupon_service/domain/coupon.issurance/service/coupon.issue.domain.service';
import { CouponIssurance } from 'src/coupon_service/domain/coupon.issurance/coupon.issurance.entity';
import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';
import { IssueCouponCommand } from '../dto/command/isssue.coupon.command';
import { IssuranceStoreOutPort } from '../port/out/issurance.store.outport ';

@Injectable()
export class IssueCouopnService implements IssueCouponUsecase {
  constructor(
    private readonly issueCouponDomainService: IssueCouponDomainService,

    @Inject('ISSURANCE_STORE_OUTPORT')
    private readonly issuranceStoreAdaptor: IssuranceStoreOutPort,
  ) {}

  issueCoupon(command: IssueCouponCommand) {
    const coupon: Coupon = null; // db.getCouponUuid()
    // db .getByuserId()
    const latestCouponIssurance: CouponIssurance = null;
    this.issueCouponDomainService.checkAlreadyIssueCoupon(
      latestCouponIssurance,
      command.couponIssuedStartDate,
    );
    this.issueCouponDomainService.checkCreateCouponExpired(
      coupon,
      command.couponIssuedStartDate,
    );
    this.issueCouponDomainService.checkCouponExceedLimit(
      coupon,
      latestCouponIssurance,
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
    this.issueCouponDomainService.calculateNextCouponCount(
      latestCouponIssurance,
      currentIssurance,
    );
    this.issuranceStoreAdaptor.create(currentIssurance);
  }
}
