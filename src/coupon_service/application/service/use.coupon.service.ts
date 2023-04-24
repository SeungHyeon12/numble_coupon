import { IssueCouponDomainService } from 'src/coupon_service/domain/coupon.issurance/service/coupon.issue.domain.service';
import { UseCouponCommand } from '../dto/command/use.coupon.command';
import { UseCouponUseCase } from '../port/in/usecase/use.coupon.usecase';
import { CouponIssurance } from 'src/coupon_service/domain/coupon.issurance/coupon.issurance.entity';
import { Inject } from '@nestjs/common';
import { IssuranceStoreOutPort } from '../port/out/issurance.store.outport ';

export class UseCouponService implements UseCouponUseCase {
  constructor(
    @Inject('ISSURANCE_STORE_OUTPORT')
    private readonly issuranceStoreAdapter: IssuranceStoreOutPort,
    private readonly issueCouponDomainService: IssueCouponDomainService,
  ) {}

  async useCoupon(command: UseCouponCommand): Promise<void> {
    const issurance: CouponIssurance = null; //  추후 db 를 통해서 받기
    this.issueCouponDomainService.checkCanUseCoupon(
      issurance,
      command.useRequestDate,
    );
    issurance.useCoupon(command.productUuid);
    this.issuranceStoreAdapter.update(issurance);
  }
}
