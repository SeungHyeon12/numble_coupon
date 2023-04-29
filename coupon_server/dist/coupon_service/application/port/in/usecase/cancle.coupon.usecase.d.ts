import { CancleCouponCommand } from 'src/coupon_service/application/dto/command/cancle.coupon.command';
export interface CancleCouponUsecase {
    cancleUseCoupon(command: CancleCouponCommand): Promise<void>;
}
