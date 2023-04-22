import { IRegisterCouponInput } from 'src/coupon_service/domain/coupon/coupon.entity';

export class UpdateCouponCommand {
  couponUuid: string;
  discountType?: DISCOUNT_TYPE;
  discountValue?: number;
  couponActiveStartDate?: Date;
  couponActiveEndDate?: Date;
  issueLimit?: number;

  constructor(inputData: IUpdateCouponCommandConstructor) {
    Object.assign(this, inputData);
  }
}

type IUpdateCouponCommandConstructor = Partial<IRegisterCouponInput> & {
  couponUuid: string;
};
