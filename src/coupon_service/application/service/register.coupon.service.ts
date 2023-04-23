import { Injectable } from '@nestjs/common';
import { CreateCouponUseCase } from '../port/in/create.coupon.uscase';

import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';
import { RegsiterCouponProperties } from 'src/coupon_service/domain/coupon/dto/register.coupon.properties';
import { RegisterCouponCommand } from '../dto/registercoupon.command';

@Injectable()
export class RegsiterCouponService implements CreateCouponUseCase {
  //todo outport<db> redis queeue

  async createCoupon(command: RegisterCouponCommand): Promise<void> {
    const coupon = Coupon.registerCoupon(new RegsiterCouponProperties(command));
  }
}
