import { QueueIssuranceCommand } from '../dto/command/queue.issurance.command';
import { QueueIssuranceUseCase } from '../port/in/usecase/queue.issurance.usecase';
import { queueManagerOutport } from '../port/out/queue.manager.ourport';
import { CouponReaderOutPort } from '../port/out/coupon.reader.outport';
export declare class QueueIssuranceService implements QueueIssuranceUseCase {
    private readonly redisQueueManager;
    private readonly couponReaderAdaptor;
    constructor(redisQueueManager: queueManagerOutport, couponReaderAdaptor: CouponReaderOutPort);
    registerIssuranceQueue(command: QueueIssuranceCommand): Promise<void>;
}
