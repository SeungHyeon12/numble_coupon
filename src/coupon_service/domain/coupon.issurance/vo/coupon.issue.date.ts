import isNull from 'src/common/function/is.null.function';

export class CouponIssueDate {
  // 쿠폰 발급일자
  private readonly couponIssuedStartDate: Date;
  // 쿠폰 발급일자 + 6
  private couponIssuedEndDate: Date;

  constructor(issuedStartDate: Date, IssuedEndDate: Date) {
    this.couponIssuedStartDate = issuedStartDate;
    if (isNull(IssuedEndDate))
      this.calculateCouponIssuedEndDate(issuedStartDate);
    else {
      this.couponIssuedEndDate = IssuedEndDate;
    }
  }

  calculateCouponIssuedEndDate(startDate: Date) {
    const startedDate = new Date(startDate);
    this.couponIssuedEndDate = new Date(
      startDate.setDate(startDate.getDate() + 6),
    );
  }

  getcouponIssuedStartDate() {
    return this.couponIssuedStartDate;
  }

  getcouponIssuedEndDate() {
    return this.couponIssuedEndDate;
  }
}
