import { CouponIssuerModel } from './coupon.issuer.entity';
import { CouponModel } from '../../coupon/entity/coupon.entity';
import { CouponIssurance } from 'src/coupon_service/domain/coupon.issurance/coupon.issurance.entity';
export declare class CouponIssuranceModel {
    id: number;
    couponIssuedStartDate: Date;
    couponIssuedEndDate: Date;
    issueValidatedDate: Date;
    isUsedCoupon: boolean;
    couponUuid: string;
    issueCount: number;
    updatedAt: Date;
    deletedAt: Date;
    productUuid: string;
    couponIssuer: CouponIssuerModel;
    coupon: CouponModel;
    toEntity(): CouponIssurance;
}
