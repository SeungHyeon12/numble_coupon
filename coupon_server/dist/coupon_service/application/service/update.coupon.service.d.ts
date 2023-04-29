import { UpdateCouponUseCase } from '../port/in/usecase/update.coupon.command';
import { UpdateCouponCommand } from '../dto/command/update.coupon.command';
import { CouponStoreOutPort } from '../port/out/coupon.store.outport';
import { CouponReaderOutPort } from '../port/out/coupon.reader.outport';
export declare class UpdateCouponService implements UpdateCouponUseCase {
    private readonly couponStoreAdapter;
    private readonly couponReaderAdaptor;
    constructor(couponStoreAdapter: CouponStoreOutPort, couponReaderAdaptor: CouponReaderOutPort);
    updateCoupon(command: UpdateCouponCommand): Promise<void>;
}
