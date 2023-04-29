import { DISCOUNT_TYPE } from 'src/coupon_service/domain/coupon.issurance/vo/discount.type';
import { IRegisterCouponInput } from 'src/coupon_service/domain/coupon/coupon.entity';
export declare class UpdateCouponCommand {
    couponUuid: string;
    discountType?: DISCOUNT_TYPE;
    discountValue?: number;
    couponActiveStartDate?: Date;
    couponActiveEndDate?: Date;
    issueLimit?: number;
    constructor(inputData: IUpdateCouponCommandConstructor);
    private validateRequiredInputData;
}
type IUpdateCouponCommandConstructor = Partial<IRegisterCouponInput> & {
    couponUuid: string;
};
export {};
