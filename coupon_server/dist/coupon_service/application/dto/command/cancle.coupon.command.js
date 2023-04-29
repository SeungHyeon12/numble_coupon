"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancleCouponCommand = void 0;
const nestjs_grpc_exceptions_1 = require("nestjs-grpc-exceptions");
const is_null_function_1 = require("../../../../common/function/is.null.function");
class CancleCouponCommand {
    constructor(inputData) {
        this.validateRequiredInputData(inputData);
        this.issuerUuid = inputData.issuerUuid;
        this.couponUuid = inputData.couponUuid;
    }
    validateRequiredInputData(inputData) {
        if ((0, is_null_function_1.default)(inputData.issuerUuid))
            throw new nestjs_grpc_exceptions_1.GrpcInvalidArgumentException('취소하려는 하려는 쿠폰의 IssuerUuid 값이 빠져있습니다');
        if ((0, is_null_function_1.default)(inputData.couponUuid))
            throw new nestjs_grpc_exceptions_1.GrpcInvalidArgumentException('취소하려는 하려는 쿠폰의 couponUuid 값이 빠져있습니다');
    }
}
exports.CancleCouponCommand = CancleCouponCommand;
//# sourceMappingURL=cancle.coupon.command.js.map