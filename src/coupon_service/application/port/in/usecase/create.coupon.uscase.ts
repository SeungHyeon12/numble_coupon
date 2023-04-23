import { RegisterCouponCommand } from 'src/coupon_service/application/dto/command/registercoupon.command';

export interface CreateCouponUseCase {
  createCoupon(command: RegisterCouponCommand): Promise<void>;
}
