import { CancleCouponUsecase } from '../port/in/usecase/cancle.coupon.usecase';
import { CancleCouponCommand } from '../dto/command/cancle.coupon.command';
import { IssuranceStoreOutPort } from '../port/out/issurance.store.outport ';
import { IssuranceReaderOutPort } from '../port/out/issurance.reader.outport';
export declare class CancleCouponService implements CancleCouponUsecase {
    private readonly issuranceStoreAdaptor;
    private readonly issuranceReadAdaptor;
    private readonly issuranceStoreAdapter;
    constructor(issuranceStoreAdaptor: IssuranceStoreOutPort, issuranceReadAdaptor: IssuranceReaderOutPort, issuranceStoreAdapter: IssuranceStoreOutPort);
    cancleUseCoupon(command: CancleCouponCommand): Promise<void>;
}
