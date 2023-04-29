export declare class UseCouponCommand {
    couponUuid: string;
    issuerUuid: string;
    productUuid: string;
    useRequestDate: Date;
    constructor(inputData: IUseCouponCommandConstructor);
    private validateInputData;
}
type IUseCouponCommandConstructor = {
    couponUuid: string;
    issuerUuid: string;
    productUuid: string;
    useRequestDate: Date;
};
export {};
