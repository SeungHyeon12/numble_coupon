import { UseCouponCommand } from 'src/coupon_service/application/dto/command/use.coupon.command';
export interface UseCouponUseCase {
    useCoupon(command: UseCouponCommand): Promise<void>;
}
