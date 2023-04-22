import { NotAcceptableException } from '@nestjs/common';
import { CouponDiscountInfo } from './vo/coupon/coupon.disount.info';
import { CouponUuid } from './vo/coupon/coupon.uuid';
import { CouponActiveDate } from './vo/coupon/coupont.active.date';

export class Coupon {
  // coupon 의 id
  private readonly couponId: number;

  // coupon 의 노출 식별자 uuid(vo)
  private readonly couponUuid: CouponUuid;

  // coupon 의 discount 관련 (vo)
  private readonly couponDiscountInfo: CouponDiscountInfo;

  // coupon 의 유효성에 대한 조건을 가지고 있는 validity(vo)
  private readonly couponValidity: CouponActiveDate;

  constructor(couponConstructorData: ICouponConstructorInput) {
    this.couponId = couponConstructorData.couponId;
    this.couponUuid = new CouponUuid(couponConstructorData.couponUuid);
    this.couponDiscountInfo = new CouponDiscountInfo(
      couponConstructorData.discountType,
      couponConstructorData.discountValue,
    );
    this.couponValidity = new CouponActiveDate(
      couponConstructorData.couponActiveStartDate,
      couponConstructorData.couponActiveEndDate,
    );
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

export type ICouponConstructorInput = {
  couponId: number;
  couponUuid: string;
  discountType: DISCOUNT_TYPE;
  discountValue: number;
  couponActiveStartDate: Date;
  couponActiveEndDate: Date;
};

type ICreateCouponInput = Omit<
  ICouponConstructorInput,
  'couoponId' | 'couponUuid'
>;
