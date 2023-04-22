export interface UpdateCouponUseCase {
  createCoupon(command: UpdateCouponUseCase): Promise<void>;
}
