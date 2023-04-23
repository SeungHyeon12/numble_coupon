export class CancleCouponCommand {
  issuerUuid: string;
  couponUuid: string;

  constructor(inputData: ICancleCouponCommandConstructor) {
    this.issuerUuid = inputData.issuerUuid;
    this.couponUuid = inputData.couopnUuid;
  }
}

type ICancleCouponCommandConstructor = {
  issuerUuid: string;
  couopnUuid: string;
};
