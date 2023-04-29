import { IIssueCouponInput } from '../coupon.issurance.entity';
export declare class IssueCouponProperties implements Omit<IIssueCouponInput, 'issueCount'> {
    issueLimit: number;
    couponIssuedStartDate: Date;
    couponIssuedEndDate: Date;
    issuerUuid: string;
    couponUuid: string;
    constructor(command: any, couponUuid: string);
}
