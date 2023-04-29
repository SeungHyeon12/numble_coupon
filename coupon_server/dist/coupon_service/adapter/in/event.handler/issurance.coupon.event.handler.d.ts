import { Job } from 'bull';
import { IssueCouponUsecase } from 'src/coupon_service/application/port/in/usecase/issue.coupon.usecase';
import { CreateIssuranceEvent } from './event/create.issurance.event';
import { EventMapper } from './event.mapper';
export declare class IssuranceCouponEventHandler {
    private readonly issueCouponService;
    private readonly eventMapper;
    constructor(issueCouponService: IssueCouponUsecase, eventMapper: EventMapper);
    handleCreateIssuranceEvent(job: Job<CreateIssuranceEvent>): Promise<void>;
}
