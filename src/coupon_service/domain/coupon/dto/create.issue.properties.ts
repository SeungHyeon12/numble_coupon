import { CreateCouponCommand } from 'src/coupon_service/application/dto/create.coupon.command';
import { ICreateCouponInput } from '../coupon.entity';

export class CreateCouponProperties implements ICreateCouponInput {
  issueLimit: number;
  discountType: DISCOUNT_TYPE;
  discountValue: number;
  couponActiveStartDate: Date;
  couponActiveEndDate: Date;
  couponId: number;

  constructor(command: CreateCouponCommand) {
    this.issueLimit = command.issueLimit;
    this.discountType = command.discountType;
    this.discountValue = command.discountValue;
    this.couponActiveStartDate = command.couponActiveStartDate;
    this.couponActiveEndDate = command.couponActiveEndDate;
  }
}
