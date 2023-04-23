import { CouponIssuer } from './coupon.issuer.entity';
import { CouponUuid } from '../coupon/vo/coupon.uuid';
import { CouponIssueDate } from './vo/coupon.issue.date';

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

  public updateIssuranceCount(nextCount: number) {
    this.issuranceCount = nextCount;
  }

  public confirmIssueValidateDate(calculatedValidateDate: Date) {
    this.issueValidatedDate = calculatedValidateDate;
  }

  public getIssueValidatedDate() {
    return this.issueValidatedDate;
  }

  public getissuranceCount() {
    return this.issuranceCount;
  }

  public getIssueDate() {
    return {
      couponIssuedStartDate: this.couponIssueDate.getcouponIssuedStartDate(),
      couponIssuedEndDate: this.couponIssueDate.getcouponIssuedEndDate(),
    };
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
