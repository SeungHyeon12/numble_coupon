import { Module } from '@nestjs/common';
import { IssueCouponDomainService } from './domain/coupon.issurance/service/coupon.issue.domain.service';
import { IssueCouopnService } from './application/service/issue.coupon.service';
import { RegsiterCouponService } from './application/service/register.coupon.service';
import { UpdateCouponService } from './application/service/update.coupon.service';
import { UseCouponService } from './application/service/use.coupon.service';
import { MysqlModule } from 'src/providers/database/mysql.module';
import { CouponRepository } from './adapter/out/persistence/coupon/repository/couopn.repository.implement';
import { RegisterCouponAdapter } from './adapter/out/persistence/coupon/adapter/register.coupon.adpater';
import { UpdateCouponAdapter } from './adapter/out/persistence/coupon/adapter/update.coupon,adapter';
import { IssuranceRepository } from './adapter/out/persistence/issurance/repository/issurance.repository.implement';
import { IssueCouponAdapter } from './adapter/out/persistence/issurance/adapter/issue.coupon.adapter';

@Module({
  imports: [MysqlModule],
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
    {
      provide: 'COUPON_REPOSITORY',
      useClass: CouponRepository,
    },
    {
      provide: 'COUPON_ISSURANCE_REPOSITORY',
      useClass: IssuranceRepository,
    },
    {
      provide: 'REGISTER_COUPON_OUTPORT',
      useClass: RegisterCouponAdapter,
    },
    {
      provide: 'UPDATE_COUPON_OUTPORT',
      useClass: UpdateCouponAdapter,
    },
    {
      provide: 'ISSUE_COUPON_OUTPORT',
      useClass: IssueCouponAdapter,
    },
  ],
})
export class CouponServiceModule {}
