import { CouponDiscountInfo } from './coupon.disount.info';
import { CouponActiveDate } from './coupont.active.date';

export class CouponInformation {
  // coupon 의 자체 시간 (vo)
  private readonly couponActiveDate: CouponActiveDate;

  // coupon 의 할인정보 (vo)
  private readonly couponDiscountInfo: CouponDiscountInfo;

  // coupon 의 생성갯수제한
  private readonly issueLimit: number;

  constructor(constructorInput: ICouponInformationConstructor) {
    this.couponActiveDate = new CouponActiveDate(
      constructorInput.couponActiveStartDate,
      constructorInput.couponActiveEndDate,
    );
    this.couponDiscountInfo = new CouponDiscountInfo(
      constructorInput.discountType,
      constructorInput.discountValue,
    );
    this.issueLimit = constructorInput.issueLimit;
  }
  getIssueLimit() {
    return this.issueLimit;
  }

  getActiveDate() {
    return {
      ...this.couponActiveDate.getProperties(),
    };
  }

  getOptions() {
    return {
      ...this.couponActiveDate.getProperties(),
      ...this.couponDiscountInfo.getProperties(),
      issueLimit: this.issueLimit,
    };
  }
}

export type ICouponInformationConstructor = {
  couponActiveStartDate: Date;
  couponActiveEndDate: Date;
  discountType: DISCOUNT_TYPE;
  discountValue: number;
  issueLimit: number;
};
