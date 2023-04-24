import { Inject } from '@nestjs/common';
import { CouponIssurance } from 'src/coupon_service/domain/coupon.issurance/coupon.issurance.entity';
import { IIssuranceRepository } from '../repository/issurance.repository';
import { IssuranceStoreOutPort } from 'src/coupon_service/application/port/out/issurance.store.outport ';

export class IssuranceStoreAdapter implements IssuranceStoreOutPort {
  constructor(
    @Inject('COUPON_ISSURANCE_REPOSITORY')
    private readonly couopnRepository: IIssuranceRepository,
  ) {}

  save(issurance: CouponIssurance): void {
    this.save(issurance);
  }

  update(issurance: CouponIssurance): void {
    this.couopnRepository.update(issurance);
  }
}
