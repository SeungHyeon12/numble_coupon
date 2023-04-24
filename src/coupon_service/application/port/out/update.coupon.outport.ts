import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';

export interface UpdateCouponOutport {
  update(coupon: Coupon): void;
}
