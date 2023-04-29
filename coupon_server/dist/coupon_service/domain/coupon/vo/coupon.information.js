"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponInformation = void 0;
const coupon_disount_info_1 = require("./coupon.disount.info");
const coupont_active_date_1 = require("./coupont.active.date");
class CouponInformation {
    constructor(constructorInput) {
        this.couponActiveDate = new coupont_active_date_1.CouponActiveDate(constructorInput.couponActiveStartDate, constructorInput.couponActiveEndDate);
        this.couponDiscountInfo = new coupon_disount_info_1.CouponDiscountInfo(constructorInput.discountType, constructorInput.discountValue);
        this.issueLimit = constructorInput.issueLimit;
    }
    getIssueLimit() {
        return this.issueLimit;
    }
    getActiveDate() {
        return Object.assign({}, this.couponActiveDate.getProperties());
    }
    getOptions() {
        return Object.assign(Object.assign(Object.assign({}, this.couponActiveDate.getProperties()), this.couponDiscountInfo.getProperties()), { issueLimit: this.issueLimit });
    }
}
exports.CouponInformation = CouponInformation;
//# sourceMappingURL=coupon.information.js.map