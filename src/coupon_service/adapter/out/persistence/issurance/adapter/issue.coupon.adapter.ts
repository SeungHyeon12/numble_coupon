import { Inject } from '@nestjs/common';
import { IssueCouponOutport } from 'src/coupon_service/application/port/out/issue.coupon.outport';
import { CouponIssurance } from 'src/coupon_service/domain/coupon.issurance/coupon.issurance.entity';
import { IIssuranceRepository } from '../repository/issurance.repository';

export class IssueCouponAdapter implements IssueCouponOutport {
  constructor(
    @Inject('COUPON_ISSURANCE_REPOSITORY')
    private readonly couopnRepository: IIssuranceRepository,
  ) {}

  save(issurance: CouponIssurance): void {
    this.save(issurance);
  }
}
