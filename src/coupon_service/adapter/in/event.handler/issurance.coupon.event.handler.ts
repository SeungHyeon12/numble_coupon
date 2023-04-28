import { Processor, Process } from '@nestjs/bull';
import { Inject } from '@nestjs/common';
import { Job } from 'bull';
import { IssueCouponUsecase } from 'src/coupon_service/application/port/in/usecase/issue.coupon.usecase';
import { CreateIssuranceEvent } from './event/create.issurance.event';
import { EventMapper } from './event.mapper';

@Processor('issue_coupon')
export class IssuranceCouponEventHandler {
  constructor(
    @Inject('ISSUE_COUPON_USECASE')
    private readonly issueCouponService: IssueCouponUsecase,
    private readonly eventMapper: EventMapper,
  ) {}

  @Process('issurance')
  async handleCreateIssuranceEvent(job: Job<CreateIssuranceEvent>) {
    await this.issueCouponService.issueCoupon(
      this.eventMapper.toCreateIssurance(job.data),
    );
  }
}
