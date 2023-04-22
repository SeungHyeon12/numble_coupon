export class CouponDiscountInfo {
  //할인 정보 타입 discount_type   <RATE> : 할인률  <AMOUNT> : 실제금액
  private readonly discountType: DISCOUNT_TYPE;

  //할인 금액 혹은 할인률 수치
  private readonly discountValue: number;

  constructor(discountType: DISCOUNT_TYPE, discountValue: number) {
    this.discountType = discountType;
    this.discountValue = discountValue;
  }

  getDiscountType() {
    return this.discountType;
  }

  getdiscountValue() {
    return this.discountValue;
  }
}
