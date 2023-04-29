import { Inject, Injectable } from '@nestjs/common';
import { CouponIssurance } from 'src/coupon_service/domain/coupon.issurance/coupon.issurance.entity';
import { IIssuranceRepository } from '../repository/issurance.repository';
import { IssuranceStoreOutPort } from 'src/coupon_service/application/port/out/issurance.store.outport ';

@Injectable()
export class IssuranceStoreAdapter implements IssuranceStoreOutPort {
  constructor(
    @Inject('COUPON_ISSURANCE_REPOSITORY')
    private readonly issuranceRepository: IIssuranceRepository,
  ) {}

  create(issurance: CouponIssurance): void {
    this.issuranceRepository.create(issurance);
  }

  update(issurance: CouponIssurance): void {
    this.issuranceRepository.update(issurance);
  }

  deleteByIssuerUuidAndCouonUuid(issuerUuid: string, couponUuid: string) {
    this.issuranceRepository.deleteByIssuerUuidAndCouonUuid(
      issuerUuid,
      couponUuid,
    );
  }

  async createIssuer(issuerId: string) {
    await this.issuranceRepository.createIssuer(issuerId);
  }
}
