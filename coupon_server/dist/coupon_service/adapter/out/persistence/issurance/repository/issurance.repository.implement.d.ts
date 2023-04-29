import { CouponIssurance } from 'src/coupon_service/domain/coupon.issurance/coupon.issurance.entity';
import { IIssuranceRepository } from './issurance.repository';
import { DataSource } from 'typeorm';
import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';
export declare class IssuranceRepository implements IIssuranceRepository {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    create(issurance: CouponIssurance): Promise<void>;
    createIssuer(issuerUuid: string): Promise<void>;
    getIssuranceByIssuerUuidAndCouponUuid(issuerUuid: string, couponUuid: string): Promise<CouponIssurance>;
    update(issurance: CouponIssurance): Promise<void>;
    deleteByIssuerUuidAndCouonUuid(issuerUuid: string, couponUuid: string): void;
    getCouponsByIssuerUuidAndRequestDate(issuerUuid: string, requestDate: Date, take: number, skip: number): Promise<Coupon[]>;
    getIssuranceByCouponUuid(couponUuid: string): Promise<CouponIssurance>;
}
