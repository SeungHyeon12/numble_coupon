import { GrpcUnavailableException } from 'nestjs-grpc-exceptions';
import { DISCOUNT_TYPE } from '../../coupon.issurance/vo/discount.type';

export class CouponDiscountInfo {
  //할인 정보 타입 discount_type   <RATE> : 할인률  <AMOUNT> : 실제금액
  private readonly discountType: DISCOUNT_TYPE;

  //할인 금액 혹은 할인률 수치
  private readonly discountValue: number;

  constructor(discountType: DISCOUNT_TYPE, discountValue: number) {
    this.discountType = discountType;
    this.discountValue = discountValue;
  }

  public static checkDiscountValueMinus(discountValue: number) {
    if (discountValue <= 0)
      throw new GrpcUnavailableException(
        '0볻자 적은 disCountValue 를 가지는 쿠폰을 발행 할 수 없습니다',
      );
  }

  getProperties() {
    return {
      discountType: this.discountType,
      discountValue: this.discountValue,
    };
  }
}
