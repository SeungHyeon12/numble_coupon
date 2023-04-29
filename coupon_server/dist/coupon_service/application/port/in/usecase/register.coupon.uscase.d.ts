import { RegisterCouponCommand } from 'src/coupon_service/application/dto/command/registercoupon.command';
export interface RegisterCouponUseCase {
    registerCoupon(command: RegisterCouponCommand): Promise<void>;
}
