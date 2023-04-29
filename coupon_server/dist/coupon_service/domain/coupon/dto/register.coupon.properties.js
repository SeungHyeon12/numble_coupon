"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegsiterCouponProperties = void 0;
class RegsiterCouponProperties {
    constructor(command) {
        this.issueLimit = command.issueLimit;
        this.discountType = command.discountType;
        this.discountValue = command.discountValue;
        this.couponActiveStartDate = command.couponActiveStartDate;
        this.couponActiveEndDate = command.couponActiveEndDate;
    }
}
exports.RegsiterCouponProperties = RegsiterCouponProperties;
//# sourceMappingURL=register.coupon.properties.js.map