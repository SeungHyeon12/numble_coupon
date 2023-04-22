import { ICreateCouponInput } from 'src/coupon_service/domain/coupon/coupon.entity';

export class UpdateCouponCommand {
  couponUuid: string;
  discountType?: DISCOUNT_TYPE;
  discountValue?: number;
  couponActiveStartDate?: Date;
  couponActiveEndDate?: Date;
  issueLimit?: number;

  constructor(inputData: IUpdateCouponCommandConstructor) {
    this.couponUuid = inputData.couponUuid;
    this.issueLimit = inputData?.issueLimit;
    this.discountType = inputData?.discountType;
    this.discountValue = inputData?.discountValue;
    this.couponActiveStartDate = inputData?.couponActiveStartDate;
    this.couponActiveEndDate = inputData?.couponActiveEndDate;
  }
}

type IUpdateCouponCommandConstructor = Partial<ICreateCouponInput> & {
  couponUuid: string;
};
