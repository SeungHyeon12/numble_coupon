import { IssuerUuid } from './vo/user.uuid';
export declare class CouponIssuer {
    issuerId: number;
    issuerUuid: IssuerUuid;
    constructor(userConstructorData: ICouponUserConstructor);
    getProperties(): {
        issuerId: number;
        issuerUuid: string;
    };
}
type ICouponUserConstructor = {
    issuerId: number;
    issuerUuid: string;
};
export {};
