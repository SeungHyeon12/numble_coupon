import { CouponUuid } from '../coupon/vo/coupon.uuid';
export declare class CouponIssurance {
    private readonly issuranceId;
    private couponIssuer;
    private readonly couponIssueDate;
    private issueValidatedDate;
    private isUsedCoupon;
    private couponUuid;
    private productUuid;
    private issueCount;
    constructor(issueData: ICouponIssuranceConstructor);
    getProperties(): {
        issuranceId: number;
        couponIssuedStartDate: Date;
        couponIssuedEndDate: Date;
        issueValidatedDate: Date;
        isUsedCoupon: boolean;
        couponUuid: string;
        productUuid: string;
        couponIssuer: {
            issuerId: number;
            issuerUuid: string;
        };
        issueCount: number;
    };
    getCouponUuid(): CouponUuid;
    getIssuer(): {
        couponIssuer: {
            issuerId: number;
            issuerUuid: string;
        };
    };
    getCount(): number;
    useCoupon(productUuid: string): void;
    checkAlreadyUseCoupon(): void;
    cancleCoupon(): void;
    confirmIssueValidateDate(calculatedValidateDate: Date): void;
    getIssueValidatedDate(): Date;
    getIssueDate(): {
        couponIssuedStartDate: Date;
        couponIssuedEndDate: Date;
    };
    static IssueCoupon(issueInputData: IIssueCouponInput): CouponIssurance;
}
export type ICouponIssuranceConstructor = {
    issuranceId: number;
    isUsedCoupon: boolean;
    couponIssuedStartDate: Date;
    couponIssuedEndDate: Date;
    issueValidatedDate: Date;
    issuerId: number;
    issuerUuid: string;
    productUuid: string;
    couponUuid: string;
    issueCount: number;
};
export type IIssueCouponInput = Omit<ICouponIssuranceConstructor, 'issuranceId' | 'issuranceCount' | 'issuerId' | 'productUuid' | 'isUsedCoupon' | 'couponIssuedEndDate' | 'issueValidatedDate'>;
