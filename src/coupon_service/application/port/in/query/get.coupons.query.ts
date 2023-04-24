import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';

export interface GetCouponsQuery {
  getCoupons(couopnIds: string[]): Promise<Coupon[]>;
}
