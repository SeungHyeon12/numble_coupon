import { DeleteCouponCommand } from 'src/coupon_service/application/dto/command/delete.coupon.command';
export interface deleteCouponUsecase {
    deleteCoupon(command: DeleteCouponCommand): void;
}
