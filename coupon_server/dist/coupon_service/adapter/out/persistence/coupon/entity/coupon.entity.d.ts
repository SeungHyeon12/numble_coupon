import { CouponInformationEmbededModel } from './coupon.informaiton.embeded.entity';
import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';
export declare class CouponModel {
    couponId: number;
    couponUuid: string;
    couponInformation: CouponInformationEmbededModel;
    createdAt: Date;
    deletedAt: Date;
    toEntity(): Coupon;
}
