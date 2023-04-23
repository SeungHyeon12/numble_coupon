import { CancleCouponCommand } from 'src/coupon_service/application/dto/cancle.coupon.command';

export interface CancleCouponUsecase {
  cancleUseCoupon(command: CancleCouponCommand): Promise<void>;
}
