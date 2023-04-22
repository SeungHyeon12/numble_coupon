import { UpdateCouponCommand } from '../../dto/update.coupon.command';

export interface UpdateCouponUseCase {
  updateCoupon(command: UpdateCouponCommand): Promise<void>;
}
