export class UseCouponCommand {
  couponUuid: string;
  issuerUuid: string;
  productUuid: string;

  constructor(inputData: IUseCouponCommandConstructor) {
    this.couponUuid = inputData.couponUuid;
    this.issuerUuid = inputData.issuerUuid;
    this.productUuid = inputData.productUuid;
  }
}

type IUseCouponCommandConstructor = {
  couponUuid: string;
  issuerUuid: string;
  productUuid: string;
};
