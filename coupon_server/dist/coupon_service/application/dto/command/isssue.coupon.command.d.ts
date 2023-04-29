export declare class IssueCouponCommand {
    couponUuid: string;
    couponIssuedStartDate: Date;
    issuerUuid: string;
    constructor(inpuData: IIssueCouponCommandConstructor);
    private validateInputData;
}
export type IIssueCouponCommandConstructor = {
    couponUuid: string;
    couponIssuedStartDate: Date;
    issuerUuid: string;
};
