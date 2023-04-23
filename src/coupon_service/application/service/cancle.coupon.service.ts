import { CouponIssurance } from 'src/coupon_service/domain/coupon.issurance/coupon.issurance.entity';
import { CancleCouponCommand } from '../dto/cancle.coupon.command';
import { CancleCouponUsecase } from '../port/in/usecase/cancle.coupon.usecase';

export class CancleCouponService implements CancleCouponUsecase {
  async cancleUseCoupon(command: CancleCouponCommand): Promise<void> {
    const issurance: CouponIssurance = null; //db 에서 값 불러오는 로직 추가
    issurance.cancleCoupon();
  }
}
