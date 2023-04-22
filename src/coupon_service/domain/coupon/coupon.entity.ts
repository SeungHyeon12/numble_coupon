import { CouopnInformation } from './vo/coupon.information';
import { CouponUuid } from './vo/coupon.uuid';

export class Coupon {
  // coupon 의 id
  private readonly couponId: number;

  // coupon 의 노출 식별자 uuid(vo)
  private readonly couponUuid: CouponUuid;

  // coupon 의 informaiton 관련 (VO)
  private readonly couponInformation: CouopnInformation;

  constructor(couponConstructorData: ICouponConstructorInput) {
    this.couponId = couponConstructorData.couponId;
    this.couponUuid = new CouponUuid(couponConstructorData.couponUuid);
    this.couponDiscountInfo = new CouponDiscountInfo(
      couponConstructorData.discountType,
      couponConstructorData.discountValue,
    );
    this.couponActiveDate = new CouponActiveDate(
      couponConstructorData.couponActiveStartDate,
      couponConstructorData.couponActiveEndDate,
    );
  }

  public static createCoupon(createInput: ICreateCouponInput) {
    return new Coupon({
      ...createInput,
      couponId: null,
      couponUuid: null,
    });
  }

  public updateCoupon(updateInput: IUpdateCouponInput) {
    return new Coupon();
  }
}

export type ICouponConstructorInput = {
  couponId: number;
  couponUuid: string;
  discountType: DISCOUNT_TYPE;
  discountValue: number;
  couponActiveStartDate: Date;
  couponActiveEndDate: Date;
  issueLimit: number;
};

export type ICreateCouponInput = Omit<
  ICouponConstructorInput,
  'couponId' | 'couponUuid'
>;

export type IUpdateCouponInput = Partial<ICreateCouponInput>;
