import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class UseCouponRequest {
  @IsNotEmpty()
  @IsString()
  productUuid: string;

  @IsNotEmpty()
  @IsString()
  issuerUuid: string;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  useRequestDate: Date;
}
