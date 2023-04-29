import { CouponIssurance } from 'src/coupon_service/domain/coupon.issurance/coupon.issurance.entity';
import { IIssuranceRepository } from '../repository/issurance.repository';
import { IssuranceStoreOutPort } from 'src/coupon_service/application/port/out/issurance.store.outport ';
export declare class IssuranceStoreAdapter implements IssuranceStoreOutPort {
    private readonly issuranceRepository;
    constructor(issuranceRepository: IIssuranceRepository);
    create(issurance: CouponIssurance): void;
    update(issurance: CouponIssurance): void;
    deleteByIssuerUuidAndCouonUuid(issuerUuid: string, couponUuid: string): void;
    createIssuer(issuerId: string): Promise<void>;
}
