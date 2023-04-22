import { ConflictException, NotAcceptableException } from '@nestjs/common';
import { CouponIssurance } from '../coupon.issurance.entity';

export class IssueCouponDomainService {
  isCouponExceedLimit(
    couponIssueLimit: number,
    latestCouponIssurances: CouponIssurance | null,
  ) {
    if (!latestCouponIssurances) return;
    if (latestCouponIssurances.getissuranceCount() < couponIssueLimit) return;
    throw new NotAcceptableException('기존 수량치본다 많이 발급되었습니다');
  }

  isAlreadyIssueCoupon(
    LatestcouponIssurance: CouponIssurance,
    couponIssuedStartDate: Date,
  ) {
    if (
      new Date(LatestcouponIssurance.getIssueValidatedDate()) >
      couponIssuedStartDate
    )
      throw new ConflictException('이미 발급된 쿠폰이 존재합니다존재합니다');
  }

  calculateNextCouponCount(
    latestCouponIssurances: CouponIssurance | null,
    currentCreatedIssurance: CouponIssurance,
  ) {
    currentCreatedIssurance.updateIssuranceCount(
      latestCouponIssurances.getissuranceCount() + 1,
    );
  }
}
