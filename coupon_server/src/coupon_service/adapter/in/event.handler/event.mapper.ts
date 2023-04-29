import { IssueCouponCommand } from 'src/coupon_service/application/dto/command/isssue.coupon.command';
import { CreateIssuranceEvent } from './event/create.issurance.event';

export class EventMapper {
  toCreateIssurance(event: CreateIssuranceEvent) {
    return new IssueCouponCommand({ ...event });
  }
}
