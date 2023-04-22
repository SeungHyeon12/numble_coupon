import { CouponActiveDate } from './vo/coupont.active.date';

export class CouponValidity {
  // 쿠폰의 자체 시작 끝 일자(vo)
  private readonly couponActiveDate: CouponActiveDate;

  //쿠폰의 갯수 발급 제한
  private issueLimit: number;

  constructor(
    couponActiveStartDate: Date,
    couponActiveEndDate: Date,
    issueLimit: number,
  ) {
    this.couponActiveDate = new CouponActiveDate(
      couponActiveStartDate,
      couponActiveEndDate,
    );
    this.issueLimit = issueLimit;
  }
}
