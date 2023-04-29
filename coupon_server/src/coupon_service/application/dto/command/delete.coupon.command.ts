import {
  CancleCouponCommand,
  ICancleCouponCommandConstructor,
} from './cancle.coupon.command';

export class DeleteCouponCommand extends CancleCouponCommand {
  constructor(inputData: IDeleteCouponCommandConstructor) {
    super(inputData);
  }
}

type IDeleteCouponCommandConstructor =
  Required<ICancleCouponCommandConstructor>;
