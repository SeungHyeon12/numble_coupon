import isNull from 'src/common/function/is.null.function';
import { ICreateCouponInput } from '../coupon.entity';
import { UpdateCouponCommand } from 'src/coupon_service/application/dto/update.coupon.command';

export class UpdateCouponProperties implements ICreateCouponInput {
  issueLimit: number | null;
  discountType: DISCOUNT_TYPE | null;
  discountValue: number | null;
  couponActiveStartDate: Date | null;
  couponActiveEndDate: Date | null;

  constructor(command: UpdateCouponCommand) {
    this.issueLimit = isNull(command.issueLimit) ? null : command.issueLimit;

    this.discountType = isNull(command.discountType)
      ? null
      : command.discountType;
    this.discountValue = isNull(command.discountValue)
      ? null
      : command.discountValue;

    this.couponActiveStartDate = isNull(command.couponActiveStartDate)
      ? null
      : command.couponActiveStartDate;
    this.couponActiveEndDate = isNull(command.couponActiveEndDate)
      ? null
      : command.couponActiveStartDate;
  }
}
