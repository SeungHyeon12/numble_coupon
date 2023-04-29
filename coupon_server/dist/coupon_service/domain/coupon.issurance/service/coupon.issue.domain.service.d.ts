import { CouponIssurance } from '../coupon.issurance.entity';
import { Coupon } from '../../coupon/coupon.entity';
export declare class IssueCouponDomainService {
    checkCreateCouponExpired(coupon: Coupon, couponIssuedStartDate: Date): void;
    calcualteValidateTime(couponIssurance: CouponIssurance, coupon: Coupon): void;
    checkAlreadyIssueCoupon(latestcouponIssurance: CouponIssurance, couponIssuedStartDate: Date): void;
    isCanUseCouponDate(issurance: CouponIssurance, useRequestDate: Date): void;
    calculateCouponCount(coupon: Coupon, lastIssurance: CouponIssurance): number;
}
