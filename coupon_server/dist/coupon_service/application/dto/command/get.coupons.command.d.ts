export declare class GetCouponsCommand {
    issuerUuid: string;
    requestDate: Date;
    page: number;
    size: number;
    constructor(inputData: IGetCouponsCommandConstructor);
    private validateRequiredInputData;
}
type IGetCouponsCommandConstructor = {
    requestDate: Date;
    issuerUuid: string;
    page: number;
    size: number;
};
export {};
