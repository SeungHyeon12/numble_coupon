import { IIssueCouponInput } from '../coupon.issurance.entity';

export class IssueCouponProperties implements IIssueCouponInput {
  issueLimit: number;
  couponIssuedStartDate: Date;
  couponIssuedEndDate: Date;
  issuerUuid: string;

  constructor(command: any) {
    this.issueLimit = command.issueLimit;
    this.couponIssuedStartDate;
  }
}
