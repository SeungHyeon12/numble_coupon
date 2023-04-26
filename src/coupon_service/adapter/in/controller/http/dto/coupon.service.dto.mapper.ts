import { RegisterCouponCommand } from 'src/coupon_service/application/dto/command/registercoupon.command';
import { RegisterCouponRequest } from './request/reigster.coupon.request';
import { UpdateCouponRequest } from './request/update.coupon.request';
import { UpdateCouponCommand } from 'src/coupon_service/application/dto/command/update.coupon.command';
import { IssueCouponRequest } from './request/issue.coupon.request';
import { IssueCouponCommand } from 'src/coupon_service/application/dto/command/isssue.coupon.command';
import { UseCouponCommand } from 'src/coupon_service/application/dto/command/use.coupon.command';
import { UseCouponRequest } from './request/use.couopn.request';

export class CouponServiceDtoMapper {
  toRegisterCommand(request: RegisterCouponRequest) {
    return new RegisterCouponCommand({ ...request });
  }

  toUpdateCommand(request: UpdateCouponRequest, couponUuid: string) {
    return new UpdateCouponCommand({ ...request, couponUuid });
  }

  toIssueCommand(request: IssueCouponRequest, couponUuid: string) {
    return new IssueCouponCommand({ ...request, couponUuid });
  }

  toUseCommand(request: UseCouponRequest, couponUuid: string) {
    return new UseCouponCommand({ ...request, couponUuid });
  }
}
