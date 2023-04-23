export interface IssueCouponUsecase {
  issueCoupon(issueCouponCommand: any): Promise<void>;
}
