import { GetCouponsQuery } from '../port/in/query/get.coupons.query';
import { GetCouponsCommand } from '../dto/command/get.coupons.command';
import { Inject } from '@nestjs/common';
import { IssuranceReaderOutPort } from '../port/out/issurance.reader.outport';

export class GetCouponsService implements GetCouponsQuery {
  @Inject('ISSURANCE_READER_OUTPORT')
  private readonly issuranceReaderAdaptor: IssuranceReaderOutPort;

  async getCoupons(command: GetCouponsCommand) {
    return null;
  }
}
