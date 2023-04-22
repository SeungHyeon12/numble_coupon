import { CouponActiveDate } from './vo/coupont.active.date';

interface CouponValidityConstructor {
  couponActiveStartDate: Date;
  couponActiveEndDate: Date;
  issueLimit: number;
}

export class CouponValidity {
  // 쿠폰의 자체 시작 끝 일자(vo)
  private readonly couponActiveDate: CouponActiveDate;

  //쿠폰의 갯수 발급 제한
  private issueLimit: number;

  constructor(createInput: CouponValidityConstructor) {
    this.couponActiveDate = new CouponActiveDate(
      createInput.couponActiveStartDate,
      createInput.couponActiveEndDate,
    );
    this.issueLimit = createInput.issueLimit;
  }
}
