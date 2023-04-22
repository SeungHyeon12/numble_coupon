import { CouponInformation } from './vo/coupon.information';
import { CouponUuid } from './vo/coupon.uuid';

export class Coupon {
  // coupon 의 id
  private readonly couponId: number;

  // coupon 의 노출 식별자 uuid(vo)
  private readonly couponUuid: CouponUuid;

  // coupon 의 informaiton 관련 (VO)
  private couponInformation: CouponInformation;

  constructor(couponConstructorData: ICouponConstructorInput) {
    this.couponId = couponConstructorData.couponId;
    this.couponUuid = new CouponUuid(couponConstructorData.couponUuid);
    this.couponInformation = new CouponInformation({
      ...couponConstructorData,
    });
  }

  public static createCoupon(createInput: ICreateCouponInput) {
    return new Coupon({
      ...createInput,
      couponId: null,
      couponUuid: null,
    });
  }

  public updateCoupon(updateInput: IUpdateCouponInput) {
    this.couponInformation = new CouponInformation({
      ...this.couponInformation.getInformation(),
      ...updateInput,
    });
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
