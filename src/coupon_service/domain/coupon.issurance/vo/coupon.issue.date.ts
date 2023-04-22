export class CouponIssueDate {
  // 쿠폰 발급일자
  private readonly couponIssuedStartDate: Date;
  // 쿠폰 발급일자 + 6
  private readonly couponIssuedEndDate: Date;

  constructor(issuedStartDate: Date, couponIssuedEndDate: Date) {
    this.couponIssuedStartDate = issuedStartDate;
    this.couponIssuedEndDate = couponIssuedEndDate;
  }

  getcouponIssuedStartDate() {
    return this.couponIssuedStartDate;
  }

  getcouponIssuedEndDate() {
    return this.couponIssuedEndDate;
  }
}