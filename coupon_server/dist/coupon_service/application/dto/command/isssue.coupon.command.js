"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCouponCommand = void 0;
const nestjs_grpc_exceptions_1 = require("nestjs-grpc-exceptions");
const is_null_function_1 = require("../../../../common/function/is.null.function");
class IssueCouponCommand {
    constructor(inpuData) {
        this.validateInputData(inpuData);
        this.couponUuid = inpuData.couponUuid;
        this.couponIssuedStartDate = inpuData.couponIssuedStartDate;
        this.issuerUuid = inpuData.issuerUuid;
    }
    validateInputData(inputData) {
        if ((0, is_null_function_1.default)(inputData.couponUuid))
            throw new nestjs_grpc_exceptions_1.GrpcInvalidArgumentException('issue하려는 couonUuid에 대한 값이 빠져있습니다');
        if ((0, is_null_function_1.default)(inputData.couponIssuedStartDate))
            throw new nestjs_grpc_exceptions_1.GrpcInvalidArgumentException('issue하려는couponIssuedStartDate에 대한 값이 빠져있습니다');
        if ((0, is_null_function_1.default)(inputData.issuerUuid))
            throw new nestjs_grpc_exceptions_1.GrpcInvalidArgumentException('issue하려는 issuerUuid에 대한 값이 빠져있습니다');
    }
}
exports.IssueCouponCommand = IssueCouponCommand;
//# sourceMappingURL=isssue.coupon.command.js.map