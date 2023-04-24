import { IIssuranceRepository } from '../repository/issurance.repository';
import { Inject } from '@nestjs/common';

export class IssuranceReaderAdapter {
  constructor(
    @Inject('COUPON_ISSURANCE_REPOSITORY')
    private readonly couopnRepository: IIssuranceRepository,
  ) {}
}
