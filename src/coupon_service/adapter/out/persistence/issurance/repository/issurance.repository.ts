import { CouponIssurance } from 'src/coupon_service/domain/coupon.issurance/coupon.issurance.entity';
import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';

export interface IIssuranceRepository {
  create(issurance: CouponIssurance): Promise<void>;
  update(issurance: CouponIssurance): void;
  deleteByIssuerUuidAndCouonUuid(issuerUuid: string, couponUuid: string): void;
  getCouponsByIssuerUuid(
    issuerUuid: string,
    requestDate: Date,
    take: number,
    skip: number,
  ): Promise<Coupon[]>;
}
