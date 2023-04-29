import { DISCOUNT_TYPE } from 'src/coupon_service/domain/coupon.issurance/vo/discount.type';
export declare class RegisterCouponRequest {
    couponActiveStartDate: Date;
    couponActiveEndDate: Date;
    discountType: DISCOUNT_TYPE;
    discountValue: number;
    issueLimit: number;
}
