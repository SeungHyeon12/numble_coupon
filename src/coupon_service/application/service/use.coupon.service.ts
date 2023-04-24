import { IssueCouponDomainService } from 'src/coupon_service/domain/coupon.issurance/service/coupon.issue.domain.service';
import { UseCouponCommand } from '../dto/command/use.coupon.command';
import { UseCouponUseCase } from '../port/in/usecase/use.coupon.usecase';
import { Inject } from '@nestjs/common';
import { IssuranceStoreOutPort } from '../port/out/issurance.store.outport ';
import { IssuranceReaderAdapter } from 'src/coupon_service/adapter/out/persistence/issurance/adapter/coupon.issurance.reader.adapter';

export class UseCouponService implements UseCouponUseCase {
  constructor(
    @Inject('ISSURANCE_STORE_OUTPORT')
    private readonly issuranceStoreAdapter: IssuranceStoreOutPort,

    @Inject('ISSURANCE_READ_OUTPORT')
    private readonly issuranceReadAdaptor: IssuranceReaderAdapter,

    private readonly issueCouponDomainService: IssueCouponDomainService,
  ) {}

  async useCoupon(command: UseCouponCommand): Promise<void> {
    const issurance =
      await this.issuranceReadAdaptor.getIssuranceByIssuerUuidAndCouponUuid(
        command.issuerUuid,
        command.couponUuid,
      );
    this.issueCouponDomainService.checkCanUseCoupon(
      issurance,
      command.useRequestDate,
    );
    issurance.useCoupon(command.productUuid);
    this.issuranceStoreAdapter.update(issurance);
  }
}
