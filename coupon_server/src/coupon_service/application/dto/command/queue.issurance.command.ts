import {
  IIssueCouponCommandConstructor,
  IssueCouponCommand,
} from './isssue.coupon.command';

export class QueueIssuranceCommand extends IssueCouponCommand {
  constructor(inputData: IIssueCouponCommandConstructor) {
    super(inputData);
  }
}
