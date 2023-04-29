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
import { EventMapper } from './adapter/in/event.handler/event.mapper';
import { IssuranceCouponEventHandler } from './adapter/in/event.handler/issurance.coupon.event.handler';
import { QueueIssuranceService } from './application/service/queue.issurance.service';
import { RedisQueueManager } from './adapter/out/queue/redis.queue.manager';
import { BullModule } from '@nestjs/bull';
import { bullMqProvider } from 'src/providers/queue/bull.mq.provider';
import { CouponGrpcController } from './adapter/in/controller/grpc/coupon.grpc.controller';
import { GrpcDtoMapper } from './adapter/in/controller/grpc/dto/dto.mapper';

@Module({
  imports: [MysqlModule, BullModule.registerQueue({ ...bullMqProvider })],
  controllers: [CouponGrpcController],
  providers: [
    IssueCouponDomainService,
    CouponServiceDtoMapper,
    EventMapper,
    IssuranceCouponEventHandler,
    GrpcDtoMapper,
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
      provide: 'QUEUE_ISSURANCE_USECASE',
      useClass: QueueIssuranceService,
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
    {
      provide: 'QUEUE_MANAGER_OUTPORT',
      useClass: RedisQueueManager,
    },
  ],
})
export class CouponServiceModule {}
