import { Queue } from 'bull';
import { queueManagerOutport } from 'src/coupon_service/application/port/out/queue.manager.ourport';
export declare class RedisQueueManager implements queueManagerOutport {
    private issueCouponQueue;
    constructor(issueCouponQueue: Queue);
    emitEvent(job: any): Promise<void>;
}
