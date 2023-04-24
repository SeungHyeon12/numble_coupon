import { Injectable, Inject } from '@nestjs/common';
import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';
import { RegsiterCouponProperties } from 'src/coupon_service/domain/coupon/dto/register.coupon.properties';
import { RegisterCouponCommand } from '../dto/command/registercoupon.command';
import { RegisterCouponOutport } from '../port/out/register.coupon.outport';
import { RegisterCouponUseCase } from '../port/in/usecase/register.coupon.uscase';

@Injectable()
export class RegsiterCouponService implements RegisterCouponUseCase {
  constructor(
    @Inject('REGISTER_COUPON_OUTPORT')
    private readonly registerCouponAdpater: RegisterCouponOutport,
  ) {}

  async registerCoupon(command: RegisterCouponCommand): Promise<void> {
    const coupon = Coupon.registerCoupon(new RegsiterCouponProperties(command));
    this.registerCouponAdpater.save(coupon);
  }
}
