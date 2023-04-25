import { RegisterCouponCommand } from 'src/coupon_service/application/dto/command/registercoupon.command';
import { RegisterCouponRequest } from './request/reigster.coupon.request';
import { UpdateCouponRequest } from './request/update.coupon.request';
import { UpdateCouponCommand } from 'src/coupon_service/application/dto/command/update.coupon.command';

export class CouponServiceDtoMapper {
  toRegisterCommand(request: RegisterCouponRequest) {
    return new RegisterCouponCommand({ ...request });
  }

  toUpdateCommand(request: UpdateCouponRequest, couponUuid: string) {
    return new UpdateCouponCommand({ ...request, couponUuid });
  }
}
