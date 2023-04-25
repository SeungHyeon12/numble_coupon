import { CancleCouponUsecase } from '../port/in/usecase/cancle.coupon.usecase';
import { CancleCouponCommand } from '../dto/command/cancle.coupon.command';
import { IssuranceStoreOutPort } from '../port/out/issurance.store.outport ';
import { Inject, Injectable } from '@nestjs/common';
import { IssuranceReaderAdapter } from 'src/coupon_service/adapter/out/persistence/issurance/adapter/coupon.issurance.reader.adapter';

@Injectable()
export class CancleCouponService implements CancleCouponUsecase {
  constructor(
    @Inject('ISSURANCE_STORE_OUTPORT')
    private readonly issuranceStoreAdaptor: IssuranceStoreOutPort,

    @Inject('ISSURANCE_READER_OUTPORT')
    private readonly issuranceReadAdaptor: IssuranceReaderAdapter,
  ) {}

  async cancleUseCoupon(command: CancleCouponCommand): Promise<void> {
    const issurance =
      await this.issuranceReadAdaptor.getIssuranceByIssuerUuidAndCouponUuid(
        command.issuerUuid,
        command.couponUuid,
      );
    issurance.cancleCoupon();
    this.issuranceStoreAdaptor.update(issurance);
  }
}
