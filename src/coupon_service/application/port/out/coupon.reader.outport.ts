import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';

export interface CouponReaderOutPort {
  getById(couponUuid: string): Coupon;
}
