import { RegisterCouponCommand } from 'src/coupon_service/application/dto/registercoupon.command';
import { IRegisterCouponInput } from '../coupon.entity';

export class RegsiterCouponProperties implements IRegisterCouponInput {
  issueLimit: number;
  discountType: DISCOUNT_TYPE;
  discountValue: number;
  couponActiveStartDate: Date;
  couponActiveEndDate: Date;

  constructor(command: RegisterCouponCommand) {
    this.issueLimit = command.issueLimit;
    this.discountType = command.discountType;
    this.discountValue = command.discountValue;
    this.couponActiveStartDate = command.couponActiveStartDate;
    this.couponActiveEndDate = command.couponActiveEndDate;
  }
}
