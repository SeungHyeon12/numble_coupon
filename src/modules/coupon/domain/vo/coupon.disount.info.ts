const DISCOUNT_TYPE = {
  RATE: 'RATE',
  AMOUNT: 'AMOUNT',
} as const;
type DISCOUNT_TYPE = (typeof DISCOUNT_TYPE)[keyof typeof DISCOUNT_TYPE];

export class CouponDiscountInfo {
  discountType: DISCOUNT_TYPE;
  discountValue: number;
}
