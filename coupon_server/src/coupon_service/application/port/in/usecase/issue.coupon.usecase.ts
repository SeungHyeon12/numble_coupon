import { IssueCouponCommand } from 'src/coupon_service/application/dto/command/isssue.coupon.command';

export interface IssueCouponUsecase {
  issueCoupon(issueCouponCommand: IssueCouponCommand): void;
}
