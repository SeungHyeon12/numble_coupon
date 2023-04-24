import { IssuranceStoreOutPort } from '../port/out/issurance.store.outport ';
import { Inject } from '@nestjs/common';
import { DeleteCouopnCommand } from '../dto/command/delete.coupon.command';
import { deleteCouponUsecase } from '../port/in/usecase/delete.coupon.usecase';

export class DeleteCouponService implements deleteCouponUsecase {
  constructor(
    @Inject('ISSURANCE_STORE_OUTPORT')
    private readonly issuranceStoreAdaptor: IssuranceStoreOutPort,
  ) {}

  async deleteCoupon(command: DeleteCouopnCommand): Promise<void> {
    this.issuranceStoreAdaptor.deleteByIssuerUuidAndCouonUuid(
      command.issuerUuid,
      command.couponUuid,
    );
  }
}
