"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponIssueDate = void 0;
const is_null_function_1 = require("../../../../common/function/is.null.function");
class CouponIssueDate {
    constructor(issuedStartDate, IssuedEndDate) {
        this.couponIssuedStartDate = issuedStartDate;
        if ((0, is_null_function_1.default)(IssuedEndDate))
            this.calculateCouponIssuedEndDate(issuedStartDate);
        else {
            this.couponIssuedEndDate = IssuedEndDate;
        }
    }
    calculateCouponIssuedEndDate(startDate) {
        const startedDate = new Date(startDate);
        this.couponIssuedEndDate = new Date(startedDate.setDate(startedDate.getDate() + 6));
    }
    getcouponIssuedStartDate() {
        return this.couponIssuedStartDate;
    }
    getcouponIssuedEndDate() {
        return this.couponIssuedEndDate;
    }
}
exports.CouponIssueDate = CouponIssueDate;
//# sourceMappingURL=coupon.issue.date.js.map