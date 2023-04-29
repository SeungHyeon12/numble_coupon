import { Inject, Injectable } from '@nestjs/common';
import { ICouponRepository } from '../repository/coupon.repository';
import { CouponReaderOutPort } from 'src/coupon_service/application/port/out/coupon.reader.outport';
import { GrpcNotFoundException } from 'nestjs-grpc-exceptions';

@Injectable()
export class CouponReaderAdapter implements CouponReaderOutPort {
  constructor(
    @Inject('COUPON_REPOSITORY')
    private readonly couponRepository: ICouponRepository,
  ) {}

  async getByCouponUuid(couponUuid: string) {
    const coupon = await this.couponRepository.getByCouponUuid(couponUuid);
    if (!coupon) {
      throw new GrpcNotFoundException('해당하는 쿠폰이 없습니다');
    }
    return coupon;
  }
}
