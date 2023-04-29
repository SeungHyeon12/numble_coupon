import { DISCOUNT_TYPE } from 'src/coupon_service/domain/coupon.issurance/vo/discount.type';
export interface GetCouponsQuery {
    getCoupons(couopon: any): Promise<CouponResponse[]>;
}
type CouponResponse = {
    couponId: number;
    couponUuid: string;
    issueLimit: number;
    discountType: DISCOUNT_TYPE;
    discountValue: number;
    couponActiveStartDate: Date;
    couponActiveEndDate: Date;
};
export {};
