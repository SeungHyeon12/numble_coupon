export class UseCouponCommand {
  couponUuid: string;
  issuerUuid: string;
  productUuid: string;
  useRequestDate: Date;

  constructor(inputData: IUseCouponCommandConstructor) {
    this.couponUuid = inputData.couponUuid;
    this.issuerUuid = inputData.issuerUuid;
    this.productUuid = inputData.productUuid;
    this.useRequestDate = inputData.useRequestDate;
  }
}

type IUseCouponCommandConstructor = {
  couponUuid: string;
  issuerUuid: string;
  productUuid: string;
  useRequestDate: Date;
};
