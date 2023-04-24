import { CouponIssurance } from 'src/coupon_service/domain/coupon.issurance/coupon.issurance.entity';

export interface IssueCouponOutport {
  save(issurance: CouponIssurance): void;
}
