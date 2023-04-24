import { Inject, Injectable } from '@nestjs/common';
import { ICouponRepository } from '../repository/coupon.repository';
import { CouponReaderOutPort } from 'src/coupon_service/application/port/out/coupon.reader.outport';

@Injectable()
export class CouponReaderAdapter implements CouponReaderOutPort {
  constructor(
    @Inject('COUPON_REPOSITORY')
    private readonly couopnRepository: ICouponRepository,
  ) {}

  async getByCouponUuid(couponUuid: string) {
    const coupon = await this.couopnRepository.getByCouponUuid(couponUuid);
    return coupon;
  }
}
