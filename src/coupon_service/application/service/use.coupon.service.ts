import { IssueCouponDomainService } from 'src/coupon_service/domain/coupon.issurance/service/coupon.issue.domain.service';
import { UseCouponCommand } from '../dto/command/use.coupon.command';
import { UseCouponUseCase } from '../port/in/usecase/use.coupon.usecase';
import { CouponIssurance } from 'src/coupon_service/domain/coupon.issurance/coupon.issurance.entity';

export class UseCouponService implements UseCouponUseCase {
  constructor(
    private readonly issueCouponDomainService: IssueCouponDomainService,
  ) {}

  async useCoupon(command: UseCouponCommand): Promise<void> {
    const issurance: CouponIssurance = null; //  추후 db 를 통해서 받기
    this.issueCouponDomainService.checkCanUseCoupon(
      issurance,
      command.useRequestDate,
    );
    issurance.useCoupon(command.productUuid);
  }
}
