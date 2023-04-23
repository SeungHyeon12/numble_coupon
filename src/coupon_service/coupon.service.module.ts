import { Module } from '@nestjs/common';
import { IssueCouponDomainService } from './domain/coupon.issurance/service/coupon.issue.domain.service';
import { IssueCouopnService } from './application/service/issue.coupon.service';

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
      provide: 'ISSUE_COUPON_USECASE',
      useClass: IssueCouopnService,
    },
    {
      provide: 'ISSUE_COUPON_USECASE',
      useClass: IssueCouopnService,
    },
  ],
})
export class CouponServiceModule {}
