import { RegisterCouponCommand } from '../../../dto/registercoupon.command';

export interface CreateCouponUseCase {
  createCoupon(command: RegisterCouponCommand): Promise<void>;
}
