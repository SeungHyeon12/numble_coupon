import { CouponIssurance } from 'src/coupon_service/domain/coupon.issurance/coupon.issurance.entity';

export interface IIssuranceRepository {
  save(issurance: CouponIssurance): void;
}
