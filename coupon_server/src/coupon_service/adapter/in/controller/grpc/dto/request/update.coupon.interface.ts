export interface IUpdateCoupon {
  couponUuid: string;

  couponActiveStartDate?: Date;

  couponActiveEndDate?: Date;

  discountType?: number;

  discountValue?: number;

  issueLimit?: number;
}
