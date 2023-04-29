import { DISCOUNT_TYPE } from 'src/coupon_service/domain/coupon.issurance/vo/discount.type';
export declare class RegisterCouponCommand {
    discountType: DISCOUNT_TYPE;
    discountValue: number;
    couponActiveStartDate: Date;
    couponActiveEndDate: Date;
    issueLimit: number;
    constructor(inputData: ICreateCouponCommandConstructor);
    private validateInputData;
}
type ICreateCouponCommandConstructor = {
    discountType: DISCOUNT_TYPE;
    discountValue: number;
    couponActiveStartDate: Date;
    couponActiveEndDate: Date;
    issueLimit: number;
};
export {};
