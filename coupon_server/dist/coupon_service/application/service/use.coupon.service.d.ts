import { IssueCouponDomainService } from 'src/coupon_service/domain/coupon.issurance/service/coupon.issue.domain.service';
import { UseCouponCommand } from '../dto/command/use.coupon.command';
import { UseCouponUseCase } from '../port/in/usecase/use.coupon.usecase';
import { IssuranceStoreOutPort } from '../port/out/issurance.store.outport ';
import { IssuranceReaderAdapter } from 'src/coupon_service/adapter/out/persistence/issurance/adapter/coupon.issurance.reader.adapter';
export declare class UseCouponService implements UseCouponUseCase {
    private readonly issuranceStoreAdapter;
    private readonly issuranceReadAdaptor;
    private readonly issueCouponDomainService;
    constructor(issuranceStoreAdapter: IssuranceStoreOutPort, issuranceReadAdaptor: IssuranceReaderAdapter, issueCouponDomainService: IssueCouponDomainService);
    useCoupon(command: UseCouponCommand): Promise<void>;
}
