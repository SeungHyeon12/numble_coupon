import { DISCOUNT_TYPE } from '../coupon.issurance/vo/discount.type';
import { CouponInformation } from './vo/coupon.information';
import { CouponUuid } from './vo/coupon.uuid';
export declare class Coupon {
    private readonly couponId;
    private readonly couponUuid;
    private couponInformation;
    constructor(couponConstructorData: ICouponConstructorInput);
    getProperties(): {
        couponId: number;
        couponUuid: string;
        couponInformation: {
            issueLimit: number;
            discountType: DISCOUNT_TYPE;
            discountValue: number;
            couponActiveStartDate: Date;
            couponActiveEndDate: Date;
        };
    };
    getCouponInformation(): CouponInformation;
    getCouponUuid(): CouponUuid;
    updateCoupon(updateInput: IUpdateCouponInput): void;
    static registerCoupon(registerInput: IRegisterCouponInput): Coupon;
}
export type ICouponConstructorInput = {
    couponId: number;
    couponUuid: string;
    discountType: DISCOUNT_TYPE;
    discountValue: number;
    couponActiveStartDate: Date;
    couponActiveEndDate: Date;
    issueLimit: number;
};
export type IRegisterCouponInput = Omit<ICouponConstructorInput, 'couponId' | 'couponUuid'>;
export type IUpdateCouponInput = Partial<IRegisterCouponInput>;
