import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';

export interface CouponStoreOutPort {
  save(coupon: Coupon): void;
  update(coupon: Coupon): void;
}
