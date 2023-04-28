import { QueueIssuranceCommand } from 'src/coupon_service/application/dto/command/queue.issurance.command';

export interface QueueIssuranceUseCase {
  registerQueue(command: QueueIssuranceCommand): Promise<void>;
}
