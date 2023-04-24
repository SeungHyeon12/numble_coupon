import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';

export interface CreateCouponOutport {
  save(coupon: Coupon){
  }
}
