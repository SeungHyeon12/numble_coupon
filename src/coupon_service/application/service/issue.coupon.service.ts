import { Injectable } from '@nestjs/common';
import { IssueCouponUsecase } from '../port/in/issue.coupon.usecase';
import { IssueCouponDomainService } from 'src/coupon_service/domain/coupon.issurance/service/coupon.issue.domain.service';
import { CouponIssurance } from 'src/coupon_service/domain/coupon.issurance/coupon.issurance.entity';
import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';

@Injectable()
export class IssueCouopnService implements IssueCouponUsecase {
  constructor(
    private readonly issueCouponDomainService: IssueCouponDomainService,
  ) {}

  issueCoupon(command: any): Promise<void> {
    const coupon: Coupon = null; // db.getCouponUuid()
    // db .getByuserId()
    const latestCouponIssurance: CouponIssurance = null;
    this.issueCouponDomainService.checkAlreadyIssueCoupon(
      latestCouponIssurance,
      command.couponIssuedStartDate,
    );
    this.issueCouponDomainService.checkCouponExpired(
      coupon,
      command.couponIssuedStartDate,
    );
    this.issueCouponDomainService.checkCouponExceedLimit(
      coupon,
      latestCouponIssurance,
    );
    const currentIssurance = CouponIssurance.IssueCoupon(command);
    this.issueCouponDomainService.calcualteValidateTime(
      currentIssurance,
      coupon,
    );
    this.issueCouponDomainService.calculateNextCouponCount(
      latestCouponIssurance,
      currentIssurance,
    );
    return;
  }
}
