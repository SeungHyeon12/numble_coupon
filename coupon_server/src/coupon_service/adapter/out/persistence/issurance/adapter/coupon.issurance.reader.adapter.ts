import { IssuranceReaderOutPort } from 'src/coupon_service/application/port/out/issurance.reader.outport';
import { IIssuranceRepository } from '../repository/issurance.repository';
import { Inject, Injectable } from '@nestjs/common';
import { CouponIssuranceModel } from '../entity/coupon.issurance.entity';

@Injectable()
export class IssuranceReaderAdapter implements IssuranceReaderOutPort {
  constructor(
    @Inject('COUPON_ISSURANCE_REPOSITORY')
    private readonly issuranceRepository: IIssuranceRepository,
  ) {}

  async getCouponsByIssuerUuidAndRequestDate(
    issuerUuid: string,
    requestDate: Date,
    take: number,
    skip: number,
  ) {
    const coupons =
      await this.issuranceRepository.getCouponsByIssuerUuidAndRequestDate(
        issuerUuid,
        requestDate,
        take,
        skip,
      );
    return coupons;
  }

  async getIssuranceByIssuerUuidAndCouponUuid(
    issuerUuid: string,
    couponUuid: string,
  ) {
    const issurance =
      await this.issuranceRepository.getIssuranceByIssuerUuidAndCouponUuid(
        issuerUuid,
        couponUuid,
      );
    return issurance;
  }

  async getIssuranceByCouponUuid(couponUuid: string) {
    const issurance = await this.issuranceRepository.getIssuranceByCouponUuid(
      couponUuid,
    );
    return issurance;
  }
}
