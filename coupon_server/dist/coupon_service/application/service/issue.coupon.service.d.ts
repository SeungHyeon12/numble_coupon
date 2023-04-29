import { IssueCouponUsecase } from '../port/in/usecase/issue.coupon.usecase';
import { IssueCouponDomainService } from 'src/coupon_service/domain/coupon.issurance/service/coupon.issue.domain.service';
import { IssueCouponCommand } from '../dto/command/isssue.coupon.command';
import { IssuranceStoreOutPort } from '../port/out/issurance.store.outport ';
import { CouponReaderOutPort } from '../port/out/coupon.reader.outport';
import { IssuranceReaderOutPort } from '../port/out/issurance.reader.outport';
export declare class IssueCouponService implements IssueCouponUsecase {
    private readonly issueCouponDomainService;
    private readonly issuranceStoreAdaptor;
    private readonly issuranceReaderAdaptor;
    private readonly couponReaderAdaptor;
    constructor(issueCouponDomainService: IssueCouponDomainService, issuranceStoreAdaptor: IssuranceStoreOutPort, issuranceReaderAdaptor: IssuranceReaderOutPort, couponReaderAdaptor: CouponReaderOutPort);
    issueCoupon(command: IssueCouponCommand): Promise<void>;
}
