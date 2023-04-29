export interface IRegisterCoupon {
  couponActiveStartDate: Date;

  couponActiveEndDate: Date;

  discountType: number;

  discountValue: number;

  issueLimit: number;
}
