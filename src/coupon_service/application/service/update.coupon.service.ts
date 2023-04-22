import { Injectable } from '@nestjs/common';
import { UpdateCouponUseCase } from '../port/in/update.coupon.command';
import { UpdateCouponCommand } from '../dto/update.coupon.command';

@Injectable()
export class UpdateCouponService implements UpdateCouponUseCase {
  //todo db 연결

  async updateCoupon(command: UpdateCouponCommand): Promise<void> {
    return;
  }
}
