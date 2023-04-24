import { Injectable, Inject } from '@nestjs/common';
import { UpdateCouponUseCase } from '../port/in/usecase/update.coupon.command';
import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';
import { UpdateCouponProperties } from 'src/coupon_service/domain/coupon/dto/update.coupon.properties';
import { UpdateCouponCommand } from '../dto/command/update.coupon.command';
import { UpdateCouponOutport } from '../port/out/update.coupon.outport';

@Injectable()
export class UpdateCouponService implements UpdateCouponUseCase {
  constructor(
    @Inject('UPDATE_COUPON_OUTPORT')
    private readonly registerCouponAdpater: UpdateCouponOutport,
  ) {}

  async updateCoupon(command: UpdateCouponCommand): Promise<void> {
    const coupon: Coupon = null; //todo db 에서 findId 를 통해서 받아오는것 필요
    coupon.updateCoupon(new UpdateCouponProperties(command));
    this.registerCouponAdpater.update(coupon);
  }
}
