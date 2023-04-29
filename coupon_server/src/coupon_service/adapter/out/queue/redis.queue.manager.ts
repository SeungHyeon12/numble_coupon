import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { queueManagerOutport } from 'src/coupon_service/application/port/out/queue.manager.ourport';

@Injectable()
export class RedisQueueManager implements queueManagerOutport {
  constructor(
    @InjectQueue('issue_coupon')
    private issueCouponQueue: Queue,
  ) {}
  async emitEvent(job: any) {
    await this.issueCouponQueue.add(
      'issurance',
      { ...job },
      { backoff: { type: 'exponential', delay: 2000 } },
    );
  }
}
