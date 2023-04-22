import { IssueCouponCommand } from '../../dto/issue.coupon.command';

export interface IssueCouponUseCase {
  issueCoupon(command: IssueCouponCommand): Promise<void>;
}
