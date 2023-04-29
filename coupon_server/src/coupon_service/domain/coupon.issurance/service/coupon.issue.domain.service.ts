import { ConflictException, NotAcceptableException } from '@nestjs/common';
import { CouponIssurance } from '../coupon.issurance.entity';
import { Coupon } from '../../coupon/coupon.entity';
import { CouponIssuranceModel } from 'src/coupon_service/adapter/out/persistence/issurance/entity/coupon.issurance.entity';
import { GrpcUnavailableException } from 'nestjs-grpc-exceptions';

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

  calcualteValidateTime(couponIssurance: CouponIssurance, coupon: Coupon) {
    const couponActiveEndDate = coupon
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

  checkAlreadyIssueCoupon(
    latestcouponIssurance: CouponIssurance,
    couponIssuedStartDate: Date,
  ) {
    if (!latestcouponIssurance) return;

    if (
      new Date(latestcouponIssurance.getIssueValidatedDate()) >=
      new Date(couponIssuedStartDate)
    )
      throw new GrpcUnavailableException(
        '이미 발급된 쿠폰이 존재합니다존재합니다',
      );
  }

  isCanUseCouponDate(issurance: CouponIssurance, useRequestDate: Date) {
    if (new Date(issurance.getIssueValidatedDate()) < new Date(useRequestDate))
      throw new GrpcUnavailableException('이미 쿠폰의 유효기간이 지났습니다');
  }

  calculateCouponCount(coupon: Coupon, lastIssurance: CouponIssurance) {
    if (!lastIssurance) return 1;
    const limit = coupon.getProperties().couponInformation.issueLimit;
    const nextCount = lastIssurance.getCount() + 1;
    if (limit < nextCount)
      throw new GrpcUnavailableException('쿠폰 발급갯수가 초과되었습니다');
    return nextCount;
  }
}
