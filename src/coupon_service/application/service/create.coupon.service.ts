import { Injectable } from '@nestjs/common';
import { CreateCouponUseCase } from '../port/in/issue.coupon.uscase';
import { CreateCouponCommand } from '../dto/create.coupon.command';
import { CouponDomainService } from 'src/coupon_service/domain/service/coupon.domain.service';
import { Coupon } from 'src/coupon_service/domain/coupon.entity';

@Injectable()
export class CreateCouponService implements CreateCouponUseCase {
  //todo outport<db> redis queeue
  constructor(private readonly couponService: CouponDomainService) {}

  async createCoupon(command: CreateCouponCommand): Promise<void> {
    const coupon = Coupon.createCoupon({ ...command });
  }
}
