import { Module } from '@nestjs/common';
import { IssueCouponDomainService } from './domain/coupon.issurance/service/coupon.issue.domain.service';
import { RegsiterCouponService } from './application/service/register.coupon.service';
import { UpdateCouponService } from './application/service/update.coupon.service';
import { UseCouponService } from './application/service/use.coupon.service';
import { MysqlModule } from 'src/providers/database/mysql.module';
import { CouponRepository } from './adapter/out/persistence/coupon/repository/coupon.repository.implement';
import { CouponStoreAdapter } from './adapter/out/persistence/coupon/adapter/coupon.store.adpater';
import { CouponReaderAdapter } from './adapter/out/persistence/coupon/adapter/coupon.reader.adapter';
import { IssuranceRepository } from './adapter/out/persistence/issurance/repository/issurance.repository.implement';
import { IssuranceStoreAdapter } from './adapter/out/persistence/issurance/adapter/coupon.issurance.store.adapter';
import { IssuranceReaderAdapter } from './adapter/out/persistence/issurance/adapter/coupon.issurance.reader.adapter';
import { CouponController } from './adapter/in/controller/http/coupon.controller';
import { CouponServiceDtoMapper } from './adapter/in/controller/http/dto/coupon.service.dto.mapper';
import { IssueCouponService } from './application/service/issue.coupon.service';
import { CancleCouponService } from './application/service/cancle.coupon.service';
import { GetCouponsService } from './application/service/get.coupons.service';

@Module({
  imports: [MysqlModule],
  controllers: [CouponController],
  providers: [
    IssueCouponDomainService,
    CouponServiceDtoMapper,
    {
      provide: 'ISSUE_COUPON_USECASE',
      useClass: IssueCouponService,
    },
    {
      provide: 'REGISTER_COUPON_USECASE',
      useClass: RegsiterCouponService,
    },
    {
      provide: 'UPDATE_COUPON_USECASE',
      useClass: UpdateCouponService,
    },
    {
      provide: 'USE_COUPON_USECASE',
      useClass: UseCouponService,
    },
    {
      provide: 'CANCLE_COUPON_USECASE',
      useClass: CancleCouponService,
    },
    {
      provide: 'GET_COUPONS_USECASE',
      useClass: GetCouponsService,
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
      provide: 'COUPON_STORE_OUTPORT',
      useClass: CouponStoreAdapter,
    },
    {
      provide: 'COUPON_READER_OUTPORT',
      useClass: CouponReaderAdapter,
    },
    {
      provide: 'ISSURANCE_STORE_OUTPORT',
      useClass: IssuranceStoreAdapter,
    },
    {
      provide: 'ISSURANCE_READER_OUTPORT',
      useClass: IssuranceReaderAdapter,
    },
  ],
})
export class CouponServiceModule {}
