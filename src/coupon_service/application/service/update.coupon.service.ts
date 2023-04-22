import { Injectable } from '@nestjs/common';
import { UpdateCouponUseCase } from '../port/in/update.coupon.command';
import { UpdateCouponCommand } from '../dto/update.coupon.command';
import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';
import { UpdateCouponProperties } from 'src/coupon_service/domain/coupon/dto/update.coupon.properties';

@Injectable()
export class UpdateCouponService implements UpdateCouponUseCase {
  //todo db 연결

  async updateCoupon(command: UpdateCouponCommand): Promise<void> {
    const Coupon: Coupon = null; //todo db 에서 findId 를 통해서 받아오는것 필요
    Coupon.updateCoupon(new UpdateCouponProperties(command));
  }
}
