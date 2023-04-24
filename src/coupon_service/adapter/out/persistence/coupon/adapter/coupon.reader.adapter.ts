import { Inject } from '@nestjs/common';
import { ICouponRepository } from '../repository/coupon.repository';

export class CouponReaderAdapter {
  constructor(
    @Inject('COUPON_REPOSITORY')
    private readonly couopnRepository: ICouponRepository,
  ) {}
}
