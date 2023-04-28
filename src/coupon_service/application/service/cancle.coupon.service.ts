import { CancleCouponUsecase } from '../port/in/usecase/cancle.coupon.usecase';
import { CancleCouponCommand } from '../dto/command/cancle.coupon.command';
import { IssuranceStoreOutPort } from '../port/out/issurance.store.outport ';
import { Inject, Injectable } from '@nestjs/common';
import { IssuranceReaderOutPort } from '../port/out/issurance.reader.outport';

@Injectable()
export class CancleCouponService implements CancleCouponUsecase {
  constructor(
    @Inject('ISSURANCE_STORE_OUTPORT')
    private readonly issuranceStoreAdaptor: IssuranceStoreOutPort,

    @Inject('ISSURANCE_READER_OUTPORT')
    private readonly issuranceReadAdaptor: IssuranceReaderOutPort,

    @Inject('ISSURANCE_STORE_OUTPORT')
    private readonly issuranceStoreAdapter: IssuranceStoreOutPort,
  ) {}

  async cancleUseCoupon(command: CancleCouponCommand): Promise<void> {
    const issurance =
      await this.issuranceReadAdaptor.getIssuranceByIssuerUuidAndCouponUuid(
        command.issuerUuid,
        command.couponUuid,
      );
    if (!issurance) throw new ConflictException('해당하는 발급내역이 없습니다');
    issurance.cancleCoupon();
    this.issuranceStoreAdaptor.update(issurance);
  }
}
