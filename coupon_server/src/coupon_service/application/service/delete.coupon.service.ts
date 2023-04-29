import { IssuranceStoreOutPort } from '../port/out/issurance.store.outport ';
import { Inject, Injectable } from '@nestjs/common';
import { deleteCouponUsecase } from '../port/in/usecase/delete.coupon.usecase';
import { DeleteCouponCommand } from '../dto/command/delete.coupon.command';

@Injectable()
export class DeleteCouponService implements deleteCouponUsecase {
  constructor(
    @Inject('ISSURANCE_STORE_OUTPORT')
    private readonly issuranceStoreAdaptor: IssuranceStoreOutPort,
  ) {}

  async deleteCoupon(command: DeleteCouponCommand): Promise<void> {
    this.issuranceStoreAdaptor.deleteByIssuerUuidAndCouonUuid(
      command.issuerUuid,
      command.couponUuid,
    );
  }
}
