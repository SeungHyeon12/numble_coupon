export class CreateCouponCommand {
  discountType: DISCOUNT_TYPE;
  discountValue: number;
  couponActiveStartDate: Date;
  couponActiveEndDate: Date;
  issueLimit: number;

  constructor(inputData: IIssueCouponCommandConstructor) {
    this.issueLimit = inputData.issueLimit;
    this.discountType = inputData.discountType;
    this.discountValue = inputData.discountValue;
    this.couponActiveStartDate = inputData.couponActiveStartDate;
    this.couponActiveEndDate = inputData.couponActiveEndDate;
  }
}

type IIssueCouponCommandConstructor = {
  discountType: DISCOUNT_TYPE;
  discountValue: number;
  couponActiveStartDate: Date;
  couponActiveEndDate: Date;
  issueLimit: number;
};
