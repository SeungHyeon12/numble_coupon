import { Injectable, Inject } from '@nestjs/common';
import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';
import { RegsiterCouponProperties } from 'src/coupon_service/domain/coupon/dto/register.coupon.properties';
import { RegisterCouponCommand } from '../dto/command/registercoupon.command';
import { RegisterCouponUseCase } from '../port/in/usecase/register.coupon.uscase';
import { CouponStoreOutPort } from '../port/out/coupon.store.outport';

@Injectable()
export class RegsiterCouponService implements RegisterCouponUseCase {
  constructor(
    @Inject('COUPON_STORE_OUTPORT')
    private readonly couponStoreAdapter: CouponStoreOutPort,
  ) {}

  async registerCoupon(command: RegisterCouponCommand): Promise<string> {
    const coupon = Coupon.registerCoupon(new RegsiterCouponProperties(command));
    await this.couponStoreAdapter.create(coupon);
    return coupon.getCouponUuid().getValue();
  }
}
