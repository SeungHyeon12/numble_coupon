import { NotAcceptableException } from '@nestjs/common';
import { CouponIssurance } from '../coupon.issurance.entity';

export class CouponDomainService {
  isCouponExceedLimit(
    couponIssueLimit: number,
    couponIssurances: CouponIssurance[] | null,
  ) {
    if (!couponIssurances) return false;
    if (couponIssurances.length < couponIssueLimit) return false;
    throw new NotAcceptableException('기존 수량치본다 많이 발급되었습니다');
  }

  isAlreadyIssueCoupon(
    couponIssurance: CouponIssurance,
    couponIssuedStartDate: Date,
  ) {}
}
