import { Injectable } from '@nestjs/common';
import { IssueCouponUseCase } from '../port/in/issue.coupon.uscase';
import { IssueCouponCommand } from '../dto/issue.coupon.command';
import { CouponDomainService } from 'src/coupon_service/domain/service/coupon.domain.service';
import { CouponIssurance } from 'src/coupon_service/domain/coupon.issurance.entity';
import { CreateIssueProperties } from 'src/coupon_service/domain/dto/create.issue.properties';

@Injectable()
export class IssueCouponService implements IssueCouponUseCase {
  //todo outport<db> redis queeue
  constructor(private readonly couponService: CouponDomainService) {}

  async issueCoupon(command: IssueCouponCommand) {
    const pastCouponIssurances: CouponIssurance[] = null; // await this.db.get(command.id)
    this.couponService.isCouponExceedLimit(
      command.issueLimit,
      pastCouponIssurances,
    );
    this.couponService.isAlreadyIssueCoupon(
      pastCouponIssurances[-1],
      command.couponIssuedStartDate,
    );
    const createIssurance = CouponIssurance.issueCoupon(
      new CreateIssueProperties({ ...command }),
    );
  }
}
