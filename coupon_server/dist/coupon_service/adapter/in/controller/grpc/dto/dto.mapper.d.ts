import { RegisterCouponCommand } from 'src/coupon_service/application/dto/command/registercoupon.command';
import { IRegisterCoupon } from './request/register.coupon.interface';
import { IUpdateCoupon } from './request/update.coupon.interface';
import { UpdateCouponCommand } from 'src/coupon_service/application/dto/command/update.coupon.command';
export declare class GrpcDtoMapper {
    toRegisterCommand(request: IRegisterCoupon): RegisterCouponCommand;
    toUpdateCommand(request: IUpdateCoupon): UpdateCouponCommand;
}
