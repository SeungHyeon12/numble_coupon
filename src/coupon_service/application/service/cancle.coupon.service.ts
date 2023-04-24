import { CouponIssurance } from 'src/coupon_service/domain/coupon.issurance/coupon.issurance.entity';
import { CancleCouponUsecase } from '../port/in/usecase/cancle.coupon.usecase';
import { CancleCouponCommand } from '../dto/command/cancle.coupon.command';
import { IssuranceStoreOutPort } from '../port/out/issurance.store.outport ';
import { Inject } from '@nestjs/common';

export class CancleCouponService implements CancleCouponUsecase {
  constructor(
    @Inject('ISSURANCE_STORE_OUTPORT')
    private readonly issuranceStoreAdaptor: IssuranceStoreOutPort,
  ) {}

  async cancleUseCoupon(command: CancleCouponCommand): Promise<void> {
    const issurance: CouponIssurance = null; //db 에서 값 불러오는 로직 추가
    issurance.cancleCoupon();
    this.issuranceStoreAdaptor.update(issurance);
  }
}
