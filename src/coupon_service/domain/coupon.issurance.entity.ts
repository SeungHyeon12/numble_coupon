import { Coupon } from './coupon.entity';
import { CouponUser } from './coupon.user.entity';
import { CouponIssueDate } from './vo/coupon/coupon.issue.date';

export class CouponIssurance {
  private readonly issuranceId: number;
  private readonly coupon: Coupon;
  private readonly couponUser: CouponUser;
  private readonly couponIssueDate: CouponIssueDate;
  private issuranceCount: number;
  private issueValidatedDate: Date;

  constructor(issueData: ICouponIssuranceConstructor) {
    this.issuranceId = issueData.issuranceId;
    this.coupon = issueData.coupon;
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
}

export type ICouponIssuranceConstructor = {
  issuranceId: number;
  issueLimit: number;
  issuranceCount: number;

  couponIssuedStartDate: Date;
  couponIssuedEndDate: Date;
  isUsable: boolean;

  coupon: Coupon;
  couponUser: CouponUser;
};

// export type IIssueCoupon = Omit<
//   ICouponIssuranceConstructor,
//   | 'issuranceId'
//   | 'couponId'
//   | 'couponUuid'
//   | 'userId'
//   | 'isUsable'
//   | 'issuranceCount'
// >;
