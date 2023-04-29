"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponDiscountInfo = void 0;
class CouponDiscountInfo {
    constructor(discountType, discountValue) {
        this.discountType = discountType;
        this.discountValue = discountValue;
    }
    getProperties() {
        return {
            discountType: this.discountType,
            discountValue: this.discountValue,
        };
    }
}
exports.CouponDiscountInfo = CouponDiscountInfo;
//# sourceMappingURL=coupon.disount.info.js.map