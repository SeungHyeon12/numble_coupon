import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';

export interface CouponReaderOutPort {
  getByCouponUuid(couponUuid: string): Promise<Coupon>;
}
