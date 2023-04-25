import { Injectable, Inject } from '@nestjs/common';
import { UpdateCouponUseCase } from '../port/in/usecase/update.coupon.command';
import { UpdateCouponProperties } from 'src/coupon_service/domain/coupon/dto/update.coupon.properties';
import { UpdateCouponCommand } from '../dto/command/update.coupon.command';
import { CouponStoreOutPort } from '../port/out/coupon.store.outport';
import { CouponReaderOutPort } from '../port/out/coupon.reader.outport';

@Injectable()
export class UpdateCouponService implements UpdateCouponUseCase {
  constructor(
    @Inject('COUPON_STORE_OUTPORT')
    private readonly couponStoreAdapter: CouponStoreOutPort,

    @Inject('COUPON_READER_OUTPORT')
    private readonly couponReaderAdaptor: CouponReaderOutPort,
  ) {}

  async updateCoupon(command: UpdateCouponCommand): Promise<void> {
    const coupon = await this.couponReaderAdaptor.getByCouponUuid(
      command.couponUuid,
    );
    coupon.updateCoupon(new UpdateCouponProperties(command));
    this.couponStoreAdapter.update(coupon);
  }
}
