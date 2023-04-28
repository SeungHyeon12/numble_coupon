import { RegisterCouponCommand } from 'src/coupon_service/application/dto/command/registercoupon.command';
import { IRegisterCoupon } from './request/register.coupon.interface';
import { IUpdateCoupon } from './request/update.coupon.interface';
import { UpdateCouponCommand } from 'src/coupon_service/application/dto/command/update.coupon.command';

export class GrpcDtoMapper {
  toRegisterCommand(request: IRegisterCoupon) {
    return new RegisterCouponCommand({
      ...request,
      couponActiveEndDate: new Date(request.couponActiveEndDate),
      couponActiveStartDate: new Date(request.couponActiveStartDate),
    });
  }

  toUpdateCommand(request: IUpdateCoupon) {
    return new UpdateCouponCommand({
      ...request,
    });
  }
}
