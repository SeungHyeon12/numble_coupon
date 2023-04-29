import { IssuranceStoreOutPort } from '../port/out/issurance.store.outport ';
import { deleteCouponUsecase } from '../port/in/usecase/delete.coupon.usecase';
import { DeleteCouponCommand } from '../dto/command/delete.coupon.command';
export declare class DeleteCouponService implements deleteCouponUsecase {
    private readonly issuranceStoreAdaptor;
    constructor(issuranceStoreAdaptor: IssuranceStoreOutPort);
    deleteCoupon(command: DeleteCouponCommand): Promise<void>;
}
