import { GetCouponsQuery } from '../port/in/query/get.coupons.query';
import { GetCouponsCommand } from '../dto/command/get.coupons.command';
import { Inject } from '@nestjs/common';
import { IssuranceReaderOutPort } from '../port/out/issurance.reader.outport';

export class GetCouponsService implements GetCouponsQuery {
  @Inject('ISSURANCE_READER_OUTPORT')
  private readonly issuranceReaderAdaptor: IssuranceReaderOutPort;

  async getCoupons(command: GetCouponsCommand) {
    const { issuerUuid, requestDate, pageSize, pageOffset } = command;
    const coupons =
      await this.issuranceReaderAdaptor.getCouponsByIssuerUuidAndRequestDate(
        issuerUuid,
        requestDate,
        pageSize,
        pageOffset,
      );
    return coupons.map((coupon) => {
      const { couponInformation, ...rest } = coupon.getProperties();
      return { ...couponInformation, ...rest };
    });
  }
}
