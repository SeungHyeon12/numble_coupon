import { CouponValidity } from './coupon.validity.entity';
import { CouponDiscountInfo } from './vo/coupon.disount.info';
import { CouponUuid } from './vo/coupon.uuid';

export class Coupon {
  // coupon 의 id
  private readonly couponId: number;

  // coupon 의 노출 식별자 uuid(vo)
  private readonly couponUuid: CouponUuid;

  // coupon 의 discount 관련 (vo)
  private readonly couponDiscountInfo: CouponDiscountInfo;

  // coupon 의 유효성에 대한 조건을 가지고 있는 validity(entity)
  private readonly couponValidity: CouponValidity;

  constructor(couponConstructorData: CouponConstructorInput) {
    this.couponId = couponConstructorData.couponId;
    this.couponUuid = new CouponUuid(couponConstructorData.couponUuid);
    this.couponDiscountInfo = new CouponDiscountInfo(
      couponConstructorData.discountType,
      couponConstructorData.discountValue,
    );
    this.couponValidity = new CouponValidity(
      couponConstructorData.couponActiveStartDate,
      couponConstructorData.couponActiveEndDate,
      couponConstructorData.issueLimit,
    );
  }
}

type CouponConstructorInput = {
  couponId: number;
  couponUuid: string;
  discountType: DISCOUNT_TYPE;
  discountValue: number;
  couponActiveStartDate: Date;
  couponActiveEndDate: Date;
  issueLimit: number;
};
