import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

export class IssueCouponRequest {
  @IsNotEmpty()
  issuerUuid: string;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  couponIssuedStartDate: Date;
}
