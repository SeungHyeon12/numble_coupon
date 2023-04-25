import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

export class IssueCouponRequest {
  @IsNotEmpty()
  issuerUuid: string;

  @IsNotEmpty()
  @IsNumber()
  discountValue: number;

  @IsNotEmpty()
  @IsDate()
  couponIssuedStartDate: Date;
}
