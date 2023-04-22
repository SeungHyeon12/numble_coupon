import { IssueCouponCommand } from 'src/coupon_service/application/dto/issue.coupon.command';
import { IIssueCoupon } from '../coupon.issurance.entity';

export class CreateIssueProperties implements IIssueCoupon {
  issueLimit: number;
  discountType: DISCOUNT_TYPE;
  discountValue: number;
  couponActiveStartDate: Date;
  couponActiveEndDate: Date;
  couponIssuedStartDate: Date;
  couponIssuedEndDate: Date;
  userUuid: string;
  productUuid: string;

  constructor(issueCouponCommand: IssueCouponCommand) {
    this.issueLimit = issueCouponCommand.issueLimit;
    this.discountType = issueCouponCommand.discountType;
    this.discountValue = issueCouponCommand.discountValue;
    this.couponActiveStartDate = issueCouponCommand.couponActiveStartDate;
    this.couponActiveEndDate = issueCouponCommand.couponActiveEndDate;
    this.couponIssuedStartDate = issueCouponCommand.couponIssuedStartDate;
    this.couponIssuedEndDate = issueCouponCommand.couponIssuedEndDate;
    this.userUuid = issueCouponCommand.userUuid;
    this.productUuid = issueCouponCommand.productUuid;
  }
}
