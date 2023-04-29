import { RegisterCouponCommand } from 'src/coupon_service/application/dto/command/registercoupon.command';
import { IRegisterCouponInput } from '../coupon.entity';
import { DISCOUNT_TYPE } from '../../coupon.issurance/vo/discount.type';
export declare class RegsiterCouponProperties implements IRegisterCouponInput {
    issueLimit: number;
    discountType: DISCOUNT_TYPE;
    discountValue: number;
    couponActiveStartDate: Date;
    couponActiveEndDate: Date;
    constructor(command: RegisterCouponCommand);
}
