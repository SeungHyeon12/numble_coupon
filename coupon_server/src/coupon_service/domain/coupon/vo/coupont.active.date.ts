export class CouponActiveDate {
  // coupon 의 자체 시작일
  private readonly couponActiveStartDate: Date;
  // coupon 의 자체 끝나는날
  private readonly couponActiveEndDate: Date;

  constructor(activeStartDate: Date, activeEndDate: Date) {
    this.couponActiveStartDate = activeStartDate;
    this.couponActiveEndDate = activeEndDate;
  }

  getProperties() {
    return {
      couponActiveStartDate: this.couponActiveStartDate,
      couponActiveEndDate: this.couponActiveEndDate,
    };
  }
}
