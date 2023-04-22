import { NotAcceptableException } from '@nestjs/common';
import { CouponIssuer } from './coupon.issuer.entity';
import { CouponUuid } from '../coupon/vo/coupon.uuid';
import { CouponIssueDate } from '../coupon/vo/coupon.issue.date';

export class CouponIssurance {
  private readonly issuranceId: number;
  private readonly coupon: CouponUuid;
  private readonly couponUser: CouponIssuer;
  private readonly couponIssueDate: CouponIssueDate;
  private issuranceCount: number;
  private issueValidatedDate: Date;

  constructor(issueData: ICouponIssuranceConstructor) {
    this.issuranceId = issueData.issuranceId;
    this.couponUser = issueData.couponUser;
    this.couponIssueDate = new CouponIssueDate(
      issueData.couponIssuedStartDate,
      issueData.couponIssuedStartDate,
    );
  }

  private calculateValidateTime(
    couponActiveEndDate: Date,
    couponIssuedEndDate: Date,
  ) {
    return new Date(couponActiveEndDate) > new Date(couponIssuedEndDate)
      ? couponIssuedEndDate
      : couponActiveEndDate;
  }

  public updateIssuranceCount(nextCount: number) {
    this.issuranceCount = nextCount;
  }

  public getIssueValidatedDate() {
    return this.issueValidatedDate;
  }

  public getissuranceCount() {
    return this.issuranceCount;
  }

  public static checkCouponExpired(
    couponIssuedStartDate: Date,
    couponActiveEndDate: Date,
  ) {
    if (new Date(couponIssuedStartDate) > new Date(couponActiveEndDate)) {
      throw new NotAcceptableException(
        'coupon 기간이 만료되어서 발급이 불가능합니다',
      );
    }
  }
}

export type ICouponIssuranceConstructor = {
  issuranceId: number;
  issueLimit: number;
  issuranceCount: number;

  couponIssuedStartDate: Date;
  couponIssuedEndDate: Date;
  isUsable: boolean;

  couponUser: CouponIssuer;
};
