import { ConflictException, NotAcceptableException } from '@nestjs/common';
import { CouponIssurance } from '../coupon.issurance.entity';

export class CouponDomainService {
  isCouponExceedLimit(
    couponIssueLimit: number,
    couponIssurances: CouponIssurance[] | null,
  ) {
    if (!couponIssurances) return;
    if (couponIssurances.length < couponIssueLimit) return;
    throw new NotAcceptableException('기존 수량치본다 많이 발급되었습니다');
  }

  isAlreadyIssueCoupon(
    LatestcouponIssurance: CouponIssurance,
    couponIssuedStartDate: Date,
  ) {
    if (
      new Date(LatestcouponIssurance.getCouponValidDate()) >
      couponIssuedStartDate
    )
      throw new ConflictException('이미 발급된 쿠폰이 존재합니다존재합니다');
  }
}
