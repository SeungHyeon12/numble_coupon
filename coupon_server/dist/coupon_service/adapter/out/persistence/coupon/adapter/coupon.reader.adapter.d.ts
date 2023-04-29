import { ICouponRepository } from '../repository/coupon.repository';
import { CouponReaderOutPort } from 'src/coupon_service/application/port/out/coupon.reader.outport';
export declare class CouponReaderAdapter implements CouponReaderOutPort {
    private readonly couponRepository;
    constructor(couponRepository: ICouponRepository);
    getByCouponUuid(couponUuid: string): Promise<import("../../../../../domain/coupon/coupon.entity").Coupon>;
}
