import { DISCOUNT_TYPE } from 'src/coupon_service/domain/coupon.issurance/vo/discount.type';
import { RegisterCouponRequest } from './reigster.coupon.request';
export declare class UpdateCouponRequest implements Partial<RegisterCouponRequest> {
    couponActiveStartDate: Date;
    couponActiveEndDate: Date;
    discountType: DISCOUNT_TYPE;
    discountValue: number;
    issueLimit: number;
}
