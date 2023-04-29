import { GetCouponsQuery } from '../port/in/query/get.coupons.query';
import { GetCouponsCommand } from '../dto/command/get.coupons.command';
export declare class GetCouponsService implements GetCouponsQuery {
    private readonly issuranceReaderAdaptor;
    getCoupons(command: GetCouponsCommand): Promise<{
        issueLimit: number;
        discountType: import("../../domain/coupon.issurance/vo/discount.type").DISCOUNT_TYPE;
        discountValue: number;
        couponActiveStartDate: Date;
        couponActiveEndDate: Date;
        couponId: number;
        couponUuid: string;
    }[]>;
}
