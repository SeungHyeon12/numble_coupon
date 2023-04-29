"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCouponProperties = void 0;
class IssueCouponProperties {
    constructor(command, couponUuid) {
        this.issueLimit = command.issueLimit;
        this.couponUuid = couponUuid;
        this.couponIssuedStartDate;
    }
}
exports.IssueCouponProperties = IssueCouponProperties;
//# sourceMappingURL=issue.coupon.properties.js.map