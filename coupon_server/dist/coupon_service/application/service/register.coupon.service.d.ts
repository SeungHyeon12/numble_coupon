import { RegisterCouponCommand } from '../dto/command/registercoupon.command';
import { RegisterCouponUseCase } from '../port/in/usecase/register.coupon.uscase';
import { CouponStoreOutPort } from '../port/out/coupon.store.outport';
export declare class RegsiterCouponService implements RegisterCouponUseCase {
    private readonly couponStoreAdapter;
    constructor(couponStoreAdapter: CouponStoreOutPort);
    registerCoupon(command: RegisterCouponCommand): Promise<void>;
}
