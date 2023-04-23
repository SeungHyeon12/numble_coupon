import { UpdateCouponCommand } from 'src/coupon_service/application/dto/update.coupon.command';

export interface UpdateCouponUseCase {
  updateCoupon(command: UpdateCouponCommand): Promise<void>;
}
