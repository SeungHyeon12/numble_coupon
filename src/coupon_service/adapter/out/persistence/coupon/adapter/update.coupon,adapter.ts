import { Inject } from '@nestjs/common';
import { UpdateCouponOutport } from 'src/coupon_service/application/port/out/update.coupon.outport';
import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';
import { ICouponRepository } from '../repository/coupon.repository';

export class UpdateCouponAdapter implements UpdateCouponOutport {
  constructor(
    @Inject('COUPON_REPOSITORY')
    private readonly couopnRepository: ICouponRepository,
  ) {}

  update(coupon: Coupon): void {
    this.couopnRepository.update(coupon);
  }
}
