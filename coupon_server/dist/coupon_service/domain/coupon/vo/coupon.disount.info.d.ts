import { DISCOUNT_TYPE } from '../../coupon.issurance/vo/discount.type';
export declare class CouponDiscountInfo {
    private readonly discountType;
    private readonly discountValue;
    constructor(discountType: DISCOUNT_TYPE, discountValue: number);
    getProperties(): {
        discountType: DISCOUNT_TYPE;
        discountValue: number;
    };
}
