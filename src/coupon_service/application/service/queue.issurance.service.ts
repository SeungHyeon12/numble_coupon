import { Inject, Injectable } from '@nestjs/common';
import { QueueIssuranceCommand } from '../dto/command/queue.issurance.command';
import { QueueIssuranceUseCase } from '../port/in/usecase/queue.issurance.usecase';
import { queueManagerOutport } from '../port/out/queue.manager.ourport';

@Injectable()
export class QueueIssuranceService implements QueueIssuranceUseCase {
  constructor(
    @Inject('QUEUE_MANAGER_OUTPORT')
    private readonly redisQueueManager: queueManagerOutport,
  ) {}

  async registerIssuranceQueue(command: QueueIssuranceCommand) {
    await this.redisQueueManager.emitEvent(command);
  }
}
