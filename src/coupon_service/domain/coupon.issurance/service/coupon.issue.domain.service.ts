import { ConflictException, NotAcceptableException } from '@nestjs/common';
import { CouponIssurance } from '../coupon.issurance.entity';
import { Coupon } from '../../coupon/coupon.entity';

export class IssueCouponDomainService {
  checkCreateCouponExpired(coupon: Coupon, couponIssuedStartDate: Date) {
    const couponActiveEndDate = coupon
      .getCouponInformation()
      .getActiveDate().couponActiveEndDate;

    if (new Date(couponIssuedStartDate) > new Date(couponActiveEndDate)) {
      throw new NotAcceptableException(
        'coupon 기간이 만료되어서 발급이 불가능합니다',
      );
    }
  }

  calcualteValidateTime(couponIssurance: CouponIssurance, couopn: Coupon) {
    const couponActiveEndDate = couopn
      .getCouponInformation()
      .getActiveDate().couponActiveEndDate;

    const couponIssuedEndDate =
      couponIssurance.getIssueDate().couponIssuedEndDate;

    const calculatedValidateTime =
      new Date(couponActiveEndDate) > new Date(couponIssuedEndDate)
        ? couponIssuedEndDate
        : couponActiveEndDate;

    couponIssurance.confirmIssueValidateDate(calculatedValidateTime);
  }

  checkCouponExceedLimit(
    coupon: Coupon,
    latestCouponIssurances: CouponIssurance | null,
  ) {
    if (!latestCouponIssurances) return;
    if (
      latestCouponIssurances.getissuranceCount() <
      coupon.getCouponInformation().getIssueLimit()
    )
      return;
    throw new NotAcceptableException('기존 수량치본다 많이 발급되었습니다');
  }

  checkAlreadyIssueCoupon(
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
    if (!latestCouponIssurances)
      currentCreatedIssurance.updateIssuranceCount(1);
    currentCreatedIssurance.updateIssuranceCount(
      latestCouponIssurances.getissuranceCount() + 1,
    );
  }

  checkCanUseCoupon(issurance: CouponIssurance, useRequestDate: Date) {
    if (new Date(issurance.getIssueValidatedDate()) < new Date(useRequestDate))
      throw new NotAcceptableException('이미 쿠폰의 유효기간이 지났습니다');
  }
}
