import { IssuranceReaderOutPort } from 'src/coupon_service/application/port/out/issurance.reader.outport';
import { IIssuranceRepository } from '../repository/issurance.repository';
import { Inject } from '@nestjs/common';

export class IssuranceReaderAdapter implements IssuranceReaderOutPort {
  constructor(
    @Inject('COUPON_ISSURANCE_REPOSITORY')
    private readonly couopnRepository: IIssuranceRepository,
  ) {}

  async getCouponsByIssuerUuid(
    issuerUuid: string,
    take: number,
    skip: number,
  ) {}
}
