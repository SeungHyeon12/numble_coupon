import { UseCouponOutport } from 'src/coupon_service/application/port/out/use.coupon.outport';
import { CouponIssurance } from 'src/coupon_service/domain/coupon.issurance/coupon.issurance.entity';
import { IIssuranceRepository } from '../repository/issurance.repository';
import { Inject } from '@nestjs/common';

export class UseCouopnAdapter implements UseCouponOutport {
  constructor(
    @Inject('COUPON_ISSURANCE_REPOSITORY')
    private readonly couopnRepository: IIssuranceRepository,
  ) {}
  update(issurance: CouponIssurance): void {
    this.couopnRepository.update(issurance);
  }
}
