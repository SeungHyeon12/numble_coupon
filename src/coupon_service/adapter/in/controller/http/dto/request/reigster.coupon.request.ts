import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';
import { DISCOUNT_TYPE } from 'src/coupon_service/domain/coupon.issurance/vo/discount.type';

export class RegisterCouponRequest {
  @IsDate()
  @IsNotEmpty()
  couponActiveStartDate: Date;

  @IsDate()
  @IsNotEmpty()
  couponActiveEndDate: Date;

  @IsNotEmpty()
  discountType: DISCOUNT_TYPE;

  @IsNotEmpty()
  @IsNumber()
  discountValue: number;

  @IsNotEmpty()
  @IsNumber()
  issueLimit: number;
}
