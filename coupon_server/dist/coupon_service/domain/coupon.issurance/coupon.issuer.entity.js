"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponIssuer = void 0;
const user_uuid_1 = require("./vo/user.uuid");
class CouponIssuer {
    constructor(userConstructorData) {
        this.issuerId = userConstructorData.issuerId;
        this.issuerUuid = new user_uuid_1.IssuerUuid(userConstructorData.issuerUuid);
    }
    getProperties() {
        return {
            issuerId: this.issuerId,
            issuerUuid: this.issuerUuid.getValue(),
        };
    }
}
exports.CouponIssuer = CouponIssuer;
//# sourceMappingURL=coupon.issuer.entity.js.map