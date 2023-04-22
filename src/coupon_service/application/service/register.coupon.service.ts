import { Injectable } from '@nestjs/common';
import { CreateCouponUseCase } from '../port/in/create.coupon.uscase';
import { CreateCouponCommand } from '../dto/create.coupon.command';
import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';
import { RegsiterCouponProperties } from 'src/coupon_service/domain/coupon/dto/register.coupon.properties';

@Injectable()
export class RegsiterCouponService implements CreateCouponUseCase {
  //todo outport<db> redis queeue

  async createCoupon(command: CreateCouponCommand): Promise<void> {
    const coupon = Coupon.registerCoupon(new RegsiterCouponProperties(command));
  }
}
