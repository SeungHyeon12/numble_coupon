import { DISCOUNT_TYPE } from 'src/coupon_service/domain/coupon.issurance/vo/discount.type';
import { RegisterCouponRequest } from './reigster.coupon.request';
import { IsDate, IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateCouponRequest implements Partial<RegisterCouponRequest> {
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  couponActiveStartDate: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  couponActiveEndDate: Date;

  @IsOptional()
  discountType: DISCOUNT_TYPE;

  @IsOptional()
  @IsNumber()
  discountValue: number;

  @IsOptional()
  @IsNumber()
  issueLimit: number;
}
