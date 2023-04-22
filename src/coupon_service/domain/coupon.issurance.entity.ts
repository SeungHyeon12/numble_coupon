import { Coupon } from './coupon.entity';
import { CouponUser } from './coupon.user.entity';
import { CouponDomainService } from './service/coupon.domain.service';
import { CouponIssueDate } from './vo/coupon/coupon.issue.date';

//coupon-service 의 aggregate root
export class CouponIssurance {
  private readonly issuranceId: number;
  private issueLimit: number;
  private couponValidateDate: Date;
  private readonly coupon: Coupon;
  private readonly couponUser: CouponUser;
  private readonly couponIssueDate: CouponIssueDate;

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

  calculateValidateTime(couponActiveEndDate: Date, couponIssuedEndDate: Date) {
    return new Date(couponActiveEndDate) > new Date(couponIssuedEndDate)
      ? couponIssuedEndDate
      : couponActiveEndDate;
  }

  public static issueCoupon(issueCouponData: IIssueCoupon) {
    return new CouponIssurance({
      ...issueCouponData,
      issuranceId: null,
      couponId: null,
      couponUuid: null,
      productUuid: null,
      userId: null,
    });
  }
}

export type ICouponIssuranceConstructor = {
  issuranceId: number;
  issueLimit: number;

  couponId: number;
  couponUuid: string;
  discountType: DISCOUNT_TYPE;
  discountValue: number;
  couponActiveStartDate: Date;
  couponActiveEndDate: Date;
  couponIssuedStartDate: Date;
  couponIssuedEndDate: Date;

  userId: number;
  userUuid: string;
  productUuid: string;
};

export type IIssueCoupon = Omit<
  ICouponIssuranceConstructor,
  'issuranceId' | 'couponId' | 'couponUuid' | 'userId'
>;
