export const DISCOUNT_TYPE = {
  RATE: 'RATE',
  AMOUNT: 'AMOUNT',
} as const;
export type DISCOUNT_TYPE = (typeof DISCOUNT_TYPE)[keyof typeof DISCOUNT_TYPE];
