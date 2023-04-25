import { RegisterCouponCommand } from 'src/coupon_service/application/dto/command/registercoupon.command';
import { RegisterCouponRequest } from './reigster.coupon.request';

export class CouponServiceDtoMapper {
  toRegisterCommand(request: RegisterCouponRequest) {
    return new RegisterCouponCommand({ ...request });
  }
}
