import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';
import { ICouponRepository } from '../repository/coupon.repository';
import { CouponStoreOutPort } from 'src/coupon_service/application/port/out/coupon.store.outport';
export declare class CouponStoreAdapter implements CouponStoreOutPort {
    private readonly couponRepository;
    constructor(couponRepository: ICouponRepository);
    create(coupon: Coupon): void;
    update(coupon: Coupon): void;
}
