import { IIssueCoupon } from 'src/coupon_service/domain/coupon.issurance.entity';

export class IssueCouponCommand implements IIssueCoupon {
  issueLimit: number;
  discountType: DISCOUNT_TYPE;
  discountValue: number;
  couponActiveStartDate: Date;
  couponActiveEndDate: Date;
  couponIssuedStartDate: Date;
  couponIssuedEndDate: Date;
  userUuid: string;
  productUuid: string;

  constructor(inputData: IIssueCouponCommandConstructor) {
    this.issueLimit = inputData.issueLimit;
    this.discountType = inputData.discountType;
    this.discountValue = inputData.discountValue;
    this.couponActiveStartDate = inputData.couponActiveStartDate;
    this.couponActiveEndDate = inputData.couponActiveEndDate;
    this.couponIssuedStartDate = inputData.couponIssuedStartDate;
    this.couponIssuedEndDate = inputData.couponIssuedEndDate;
    this.userUuid = inputData.userUuid;
    this.productUuid = inputData.productUuid;
  }
}

type IIssueCouponCommandConstructor = Required<IIssueCoupon>;
