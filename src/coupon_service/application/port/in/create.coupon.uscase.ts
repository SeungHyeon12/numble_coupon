import { CreateCouponCommand } from '../../dto/registercoupon.command';

export interface CreateCouponUseCase {
  createCoupon(command: CreateCouponCommand): Promise<void>;
}
