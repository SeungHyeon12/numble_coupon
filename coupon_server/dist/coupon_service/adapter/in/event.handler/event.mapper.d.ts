import { IssueCouponCommand } from 'src/coupon_service/application/dto/command/isssue.coupon.command';
import { CreateIssuranceEvent } from './event/create.issurance.event';
export declare class EventMapper {
    toCreateIssurance(event: CreateIssuranceEvent): IssueCouponCommand;
}
