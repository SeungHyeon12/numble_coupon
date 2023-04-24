import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';

export interface IssuranceReaderOutPort {
  getCouponsByIssuerUuid(
    issuerUuid: string,
    requestDate: Date,
    take: number,
    skip: number,
  ): Promise<Coupon[]>;
}
