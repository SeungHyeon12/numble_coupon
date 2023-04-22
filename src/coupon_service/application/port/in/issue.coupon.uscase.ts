import { CreateCouponCommand } from '../../dto/create.coupon.command';

export interface CreateCouponUseCase {
  createCoupon(command: CreateCouponCommand): Promise<void>;
}
