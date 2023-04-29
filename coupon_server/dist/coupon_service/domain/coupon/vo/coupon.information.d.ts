import { DISCOUNT_TYPE } from '../../coupon.issurance/vo/discount.type';
export declare class CouponInformation {
    private readonly couponActiveDate;
    private readonly couponDiscountInfo;
    private readonly issueLimit;
    constructor(constructorInput: ICouponInformationConstructor);
    getIssueLimit(): number;
    getActiveDate(): {
        couponActiveStartDate: Date;
        couponActiveEndDate: Date;
    };
    getOptions(): {
        issueLimit: number;
        discountType: DISCOUNT_TYPE;
        discountValue: number;
        couponActiveStartDate: Date;
        couponActiveEndDate: Date;
    };
}
export type ICouponInformationConstructor = {
    couponActiveStartDate: Date;
    couponActiveEndDate: Date;
    discountType: DISCOUNT_TYPE;
    discountValue: number;
    issueLimit: number;
};
