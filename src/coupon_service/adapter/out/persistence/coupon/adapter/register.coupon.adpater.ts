import { Inject, Injectable } from '@nestjs/common';
import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';
import { ICouponRepository } from '../repository/coupon.repository';
import { RegisterCouponOutport } from 'src/coupon_service/application/port/out/register.coupon.outport';

@Injectable()
export class RegisterCouponAdapter implements RegisterCouponOutport {
  constructor(
    @Inject('COUPON_REPOSITORY')
    private readonly couopnRepository: ICouponRepository,
  ) {}

  save(coupon: Coupon): void {
    this.couopnRepository.save(coupon);
  }
}
