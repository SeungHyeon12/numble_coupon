import { CouponIssurance } from 'src/coupon_service/domain/coupon.issurance/coupon.issurance.entity';

export interface UseCouponOutport {
  update(issurance: CouponIssurance): void;
}
