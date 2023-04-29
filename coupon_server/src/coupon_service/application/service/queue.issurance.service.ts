import { Inject, Injectable } from '@nestjs/common';
import { QueueIssuranceCommand } from '../dto/command/queue.issurance.command';
import { QueueIssuranceUseCase } from '../port/in/usecase/queue.issurance.usecase';
import { queueManagerOutport } from '../port/out/queue.manager.ourport';
import { CouponReaderOutPort } from '../port/out/coupon.reader.outport';
import { GrpcNotFoundException } from 'nestjs-grpc-exceptions';
import { IssueCouponDomainService } from 'src/coupon_service/domain/coupon.issurance/service/coupon.issue.domain.service';

@Injectable()
export class QueueIssuranceService implements QueueIssuranceUseCase {
  constructor(
    @Inject('QUEUE_MANAGER_OUTPORT')
    private readonly redisQueueManager: queueManagerOutport,

    @Inject('COUPON_READER_OUTPORT')
    private readonly couponReaderAdaptor: CouponReaderOutPort,

    private readonly issueCouponDomainService: IssueCouponDomainService,
  ) {}

  async registerIssuranceQueue(command: QueueIssuranceCommand) {
    const coupon = await this.couponReaderAdaptor.getByCouponUuid(
      command.couponUuid,
    );
    if (!coupon)
      throw new GrpcNotFoundException(
        'couponUuid 에 해당하는 쿠폰이 존재하지 않습니다',
      );
    this.issueCouponDomainService.checkCreateCouponExpired(
      coupon,
      command.couponIssuedStartDate,
    );
    await this.redisQueueManager.emitEvent(command);
  }
}
