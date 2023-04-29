export declare class CancleCouponCommand {
    issuerUuid: string;
    couponUuid: string;
    constructor(inputData: ICancleCouponCommandConstructor);
    private validateRequiredInputData;
}
export type ICancleCouponCommandConstructor = {
    issuerUuid: string;
    couponUuid: string;
};
