import { Inject, Injectable } from '@nestjs/common';
import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';
import { ICouponRepository } from '../repository/coupon.repository';

import { CouponStoreOutPort } from 'src/coupon_service/application/port/out/coupon.store.outport';

@Injectable()
export class CouponStoreAdapter implements CouponStoreOutPort {
  constructor(
    @Inject('COUPON_REPOSITORY')
    private readonly couopnRepository: ICouponRepository,
  ) {}

  create(coupon: Coupon): void {
    this.couopnRepository.create(coupon);
  }

  update(coupon: Coupon): void {
    this.couopnRepository.update(coupon);
  }
}
