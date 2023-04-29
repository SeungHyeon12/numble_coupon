"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCouponCommand = void 0;
const nestjs_grpc_exceptions_1 = require("nestjs-grpc-exceptions");
const is_null_function_1 = require("../../../../common/function/is.null.function");
class UpdateCouponCommand {
    constructor(inputData) {
        this.validateRequiredInputData(inputData.couponUuid);
        Object.assign(this, inputData);
    }
    validateRequiredInputData(couponUuid) {
        if ((0, is_null_function_1.default)(couponUuid))
            throw new nestjs_grpc_exceptions_1.GrpcInvalidArgumentException('업데이트 하려는 쿠폰의 uuid 값이 빠져있습니다');
    }
}
exports.UpdateCouponCommand = UpdateCouponCommand;
//# sourceMappingURL=update.coupon.command.js.map