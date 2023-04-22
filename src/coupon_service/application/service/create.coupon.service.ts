import { Injectable } from '@nestjs/common';
import { CreateCouponUseCase } from '../port/in/issue.coupon.uscase';
import { CreateCouponCommand } from '../dto/create.coupon.command';
import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';
import { CreateCouponProperties } from 'src/coupon_service/domain/coupon/dto/create.coupon.properties';

@Injectable()
export class CreateCouponService implements CreateCouponUseCase {
  //todo outport<db> redis queeue

  async createCoupon(command: CreateCouponCommand): Promise<void> {
    const coupon = Coupon.createCoupon(new CreateCouponProperties(command));
  }
}
