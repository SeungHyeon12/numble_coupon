"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventMapper = void 0;
const isssue_coupon_command_1 = require("../../../application/dto/command/isssue.coupon.command");
class EventMapper {
    toCreateIssurance(event) {
        return new isssue_coupon_command_1.IssueCouponCommand(Object.assign({}, event));
    }
}
exports.EventMapper = EventMapper;
//# sourceMappingURL=event.mapper.js.map