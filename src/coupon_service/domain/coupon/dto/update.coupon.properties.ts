import { UpdateCouponCommand } from 'src/coupon_service/application/dto/update.coupon.command';
import { IUpdateCouponInput } from '../coupon.entity';

export class UpdateCouponProperties implements IUpdateCouponInput {
  issueLimit?: number;
  discountType?: DISCOUNT_TYPE;
  discountValue?: number;
  couponActiveStartDate?: Date;
  couponActiveEndDate?: Date;

  constructor(command: UpdateCouponCommand) {
    const { couponUuid, ...couponInfo } = command;
    Object.assign(this, couponInfo);
  }
}
