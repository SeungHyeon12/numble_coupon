import { IsNotEmpty } from 'class-validator';

export class CancleCouponRequest {
  @IsNotEmpty()
  issuerUuid: string;
}
