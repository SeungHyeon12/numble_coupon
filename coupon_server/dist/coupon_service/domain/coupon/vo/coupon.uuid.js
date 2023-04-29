"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponUuid = void 0;
const uuid_1 = require("../../../../common/domain/vo/uuid");
const uuid_generate_function_1 = require("../../../../common/function/uuid.generate.function");
class CouponUuid extends uuid_1.Uuid {
    constructor(uuid) {
        if (!uuid) {
            super((0, uuid_generate_function_1.default)());
        }
        else {
            super(uuid);
        }
    }
}
exports.CouponUuid = CouponUuid;
//# sourceMappingURL=coupon.uuid.js.map