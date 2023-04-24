import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';

export interface ICouponRepository {
  save(couopn: Coupon): void;
  update(coupon: Coupon): void;
}
