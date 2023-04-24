import { CouponIssurance } from 'src/coupon_service/domain/coupon.issurance/coupon.issurance.entity';

export interface IssuranceStoreOutPort {
  create(issurance: CouponIssurance): void;
  update(issurance: CouponIssurance): void;
  deleteByIssuerUuidAndCouonUuid(issuerUuid: string, couponUuid: string);
}
