import { IssuranceReaderOutPort } from 'src/coupon_service/application/port/out/issurance.reader.outport';
import { IIssuranceRepository } from '../repository/issurance.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class IssuranceReaderAdapter implements IssuranceReaderOutPort {
  constructor(
    @Inject('COUPON_ISSURANCE_REPOSITORY')
    private readonly couopnRepository: IIssuranceRepository,
  ) {}

  async getCouponsByIssuerUuid(
    issuerUuid: string,
    requestDate: Date,
    take: number,
    skip: number,
  ) {
    const coupons = await this.couopnRepository.getCouponsByIssuerUuid(
      issuerUuid,
      requestDate,
      take,
      skip,
    );
    return coupons;
  }
}
