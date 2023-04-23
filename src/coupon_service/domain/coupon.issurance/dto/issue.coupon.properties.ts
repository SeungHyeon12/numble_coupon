import { IIssueCouponInput } from '../coupon.issurance.entity';

export class IssueCouponProperties implements IIssueCouponInput {
  issueLimit: number;
  couponIssuedStartDate: Date;
  couponIssuedEndDate: Date;
  issuerUuid: string;
  couponUuid: string;

  constructor(command: any, couponUuid: string) {
    this.issueLimit = command.issueLimit;
    this.couponUuid = couponUuid;
    this.couponIssuedStartDate;
  }
}
