import { Inject, Injectable } from '@nestjs/common';
import { QueueIssuranceCommand } from '../dto/command/queue.issurance.command';
import { QueueIssuranceUseCase } from '../port/in/usecase/queue.issurance.usecase';
import { queueManagerOutport } from '../port/out/queue.manager.ourport';
import { CouponReaderOutPort } from '../port/out/coupon.reader.outport';
import { GrpcNotFoundException } from 'nestjs-grpc-exceptions';

@Injectable()
export class QueueIssuranceService implements QueueIssuranceUseCase {
  constructor(
    @Inject('QUEUE_MANAGER_OUTPORT')
    private readonly redisQueueManager: queueManagerOutport,

    @Inject('COUPON_READER_OUTPORT')
    private readonly couponReaderAdaptor: CouponReaderOutPort,
  ) {}

  async registerIssuranceQueue(command: QueueIssuranceCommand) {
    const couopn = await this.couponReaderAdaptor.getByCouponUuid(
      command.couponUuid,
    );
    if (!couopn)
      throw new GrpcNotFoundException(
        'couponUuid 에 해당하는 쿠폰이 존재하지 않습니다',
      );
    await this.redisQueueManager.emitEvent(command);
  }
}
