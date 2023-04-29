import { CancleCouponCommand, ICancleCouponCommandConstructor } from './cancle.coupon.command';
export declare class DeleteCouponCommand extends CancleCouponCommand {
    constructor(inputData: IDeleteCouponCommandConstructor);
}
type IDeleteCouponCommandConstructor = Required<ICancleCouponCommandConstructor>;
export {};
