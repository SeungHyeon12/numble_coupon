"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coupon = void 0;
const coupon_information_1 = require("./vo/coupon.information");
const coupon_uuid_1 = require("./vo/coupon.uuid");
class Coupon {
    constructor(couponConstructorData) {
        this.couponId = couponConstructorData.couponId;
        this.couponUuid = new coupon_uuid_1.CouponUuid(couponConstructorData.couponUuid);
        this.couponInformation = new coupon_information_1.CouponInformation(Object.assign({}, couponConstructorData));
    }
    getProperties() {
        return {
            couponId: this.couponId,
            couponUuid: this.couponUuid.getValue(),
            couponInformation: this.couponInformation.getOptions(),
        };
    }
    getCouponInformation() {
        return this.couponInformation;
    }
    getCouponUuid() {
        return this.couponUuid;
    }
    updateCoupon(updateInput) {
        this.couponInformation = new coupon_information_1.CouponInformation(Object.assign(Object.assign({}, this.couponInformation.getOptions()), updateInput));
    }
    static registerCoupon(registerInput) {
        return new Coupon(Object.assign(Object.assign({}, registerInput), { couponId: null, couponUuid: null }));
    }
}
exports.Coupon = Coupon;
//# sourceMappingURL=coupon.entity.js.map