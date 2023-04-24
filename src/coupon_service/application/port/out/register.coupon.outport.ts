import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';

export interface RegisterCouponOutport {
  save(coupon: Coupon): void;
}
