import { Module } from '@nestjs/common';
import { IssueCouponDomainService } from './domain/coupon.issurance/service/coupon.issue.domain.service';
import { IssueCouopnService } from './application/service/issue.coupon.service';
import { RegsiterCouponService } from './application/service/register.coupon.service';
import { UpdateCouponService } from './application/service/update.coupon.service';
import { UseCouponService } from './application/service/use.coupon.service';

@Module({
  imports: [],
  controllers: [],
  providers: [
    IssueCouponDomainService,
    {
      provide: 'ISSUE_COUPON_USECASE',
      useClass: IssueCouopnService,
    },
    {
      provide: 'REGISTER_COUPON_USECASE',
      useClass: RegsiterCouponService,
    },
    {
      provide: 'UPDATE_COUOPN_USECASE',
      useClass: UpdateCouponService,
    },
    {
      provide: 'USE_COUOPN_USECASE',
      useClass: UseCouponService,
    },
  ],
})
export class CouponServiceModule {}
