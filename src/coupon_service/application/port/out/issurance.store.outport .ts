import { CouponIssurance } from 'src/coupon_service/domain/coupon.issurance/coupon.issurance.entity';

export interface IssuranceStoreOutPort {
  save(issurance: CouponIssurance): void;
  update(issurance: CouponIssurance): void;
}
