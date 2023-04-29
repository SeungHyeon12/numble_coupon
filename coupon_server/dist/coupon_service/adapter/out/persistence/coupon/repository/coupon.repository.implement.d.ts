import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';
import { ICouponRepository } from './coupon.repository';
import { DataSource } from 'typeorm';
export declare class CouponRepository implements ICouponRepository {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    create(coupon: Coupon): void;
    getByCouponUuid(couponUuid: string): Promise<Coupon>;
    update(coupon: Coupon): void;
}
