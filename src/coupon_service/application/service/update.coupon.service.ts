import { Injectable } from '@nestjs/common';
import { UpdateCouponUseCase } from '../port/in/update.coupon.command';

@Injectable()
export class UpdateCouponService implements UpdateCouponUseCase {
  //todo db 연결

  async createCoupon(command: UpdateCouponUseCase): Promise<void> {
    return;
  }
}
