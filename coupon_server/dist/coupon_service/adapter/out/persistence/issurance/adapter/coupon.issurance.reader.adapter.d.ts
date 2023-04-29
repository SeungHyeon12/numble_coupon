import { IssuranceReaderOutPort } from 'src/coupon_service/application/port/out/issurance.reader.outport';
import { IIssuranceRepository } from '../repository/issurance.repository';
export declare class IssuranceReaderAdapter implements IssuranceReaderOutPort {
    private readonly issuranceRepository;
    constructor(issuranceRepository: IIssuranceRepository);
    getCouponsByIssuerUuidAndRequestDate(issuerUuid: string, requestDate: Date, take: number, skip: number): Promise<import("../../../../../domain/coupon/coupon.entity").Coupon[]>;
    getIssuranceByIssuerUuidAndCouponUuid(issuerUuid: string, couponUuid: string): Promise<import("../../../../../domain/coupon.issurance/coupon.issurance.entity").CouponIssurance>;
    getIssuranceByCouponUuid(couponUuid: string): Promise<any>;
}
