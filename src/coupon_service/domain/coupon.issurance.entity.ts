import { Coupon } from './coupon.entity';
import { CouponUser } from './coupon.user.entity';
import { CouponIssueDate } from './vo/coupon/coupon.issue.date';

//coupon-service 의 aggregate root
export class CouponIssurance {
  private readonly issuranceId: number;
  private readonly coupon: Coupon;
  private readonly couponUser: CouponUser;
  private readonly couponIssueDate: CouponIssueDate;
  private issueLimit: number;
  private issuranceCount: number;
  private couponValidateDate: Date;

  constructor(issueData: ICouponIssuranceConstructor) {
    this.issuranceId = issueData.issuranceId;
    this.issueLimit = issueData.issueLimit;
    this.couponValidateDate = this.calculateValidateTime(
      issueData.couponActiveEndDate,
      issueData.couponIssuedEndDate,
    );

    this.coupon = new Coupon({
      couponId: issueData.couponId,
      couponUuid: issueData.couponUuid,
      discountType: issueData.discountType,
      discountValue: issueData.discountValue,
      couponActiveStartDate: issueData.couponActiveStartDate,
      couponActiveEndDate: issueData.couponActiveEndDate,
      isUsable: issueData.isUsable,
    });

    this.couponUser = new CouponUser({
      userId: issueData.userId,
      userUuid: issueData.userUuid,
      productUuid: issueData.productUuid,
    });

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

  public getCouponValidDate() {
    return this.couponValidateDate;
  }

  public getissuranceCount() {
    return this.issuranceCount;
  }

  public static issueCoupon(issueCouponData: IIssueCoupon) {
    return new CouponIssurance({
      ...issueCouponData,
      isUsable: true,
      issuranceId: null,
      couponId: null,
      couponUuid: null,
      productUuid: null,
      userId: null,
      issuranceCount: null,
    });
  }
}

export type ICouponIssuranceConstructor = {
  issuranceId: number;
  issueLimit: number;
  issuranceCount: number;

  couponId: number;
  couponUuid: string;
  discountType: DISCOUNT_TYPE;
  discountValue: number;
  couponActiveStartDate: Date;
  couponActiveEndDate: Date;
  couponIssuedStartDate: Date;
  couponIssuedEndDate: Date;
  isUsable: boolean;

  userId: number;
  userUuid: string;
  productUuid: string;
};

export type IIssueCoupon = Omit<
  ICouponIssuranceConstructor,
  | 'issuranceId'
  | 'couponId'
  | 'couponUuid'
  | 'userId'
  | 'isUsable'
  | 'issuranceCount'
>;
