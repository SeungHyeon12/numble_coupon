"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponActiveDate = void 0;
class CouponActiveDate {
    constructor(activeStartDate, activeEndDate) {
        this.couponActiveStartDate = activeStartDate;
        this.couponActiveEndDate = activeEndDate;
    }
    getProperties() {
        return {
            couponActiveStartDate: this.couponActiveStartDate,
            couponActiveEndDate: this.couponActiveEndDate,
        };
    }
}
exports.CouponActiveDate = CouponActiveDate;
//# sourceMappingURL=coupont.active.date.js.map