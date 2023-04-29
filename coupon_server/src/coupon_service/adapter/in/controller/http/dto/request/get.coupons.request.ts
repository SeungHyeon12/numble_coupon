import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

export class GetCouponsRequest {
  @IsNotEmpty()
  issuerUuid: string;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  requestDate: Date;
}
