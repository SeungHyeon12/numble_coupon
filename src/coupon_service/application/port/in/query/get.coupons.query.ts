import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';

export interface GetCouponsQuery {
  getCoupons(couopon): Promise<Coupon[]>;
}
