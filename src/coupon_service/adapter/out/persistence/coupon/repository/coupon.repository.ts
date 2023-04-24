import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';

export interface ICouponRepository {
  create(couopn: Coupon): void;
  update(coupon: Coupon): void;
  getByCouponUuid(couponUuid: string): Promise<Coupon>;
}
