import {
  CancleCouponCommand,
  ICancleCouponCommandConstructor,
} from './cancle.coupon.command';

export class DeleteIssuranceCommand extends CancleCouponCommand {
  constructor(inputData: IDeleteCouponCommandConstructor) {
    super(inputData);
  }
}

type IDeleteCouponCommandConstructor =
  Required<ICancleCouponCommandConstructor>;
