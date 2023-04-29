"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCouponCommand = void 0;
const nestjs_grpc_exceptions_1 = require("nestjs-grpc-exceptions");
const is_null_function_1 = require("../../../../common/function/is.null.function");
class UseCouponCommand {
    constructor(inputData) {
        this.couponUuid = inputData.couponUuid;
        this.issuerUuid = inputData.issuerUuid;
        this.productUuid = inputData.productUuid;
        this.useRequestDate = inputData.useRequestDate;
    }
    validateInputData(inputData) {
        if ((0, is_null_function_1.default)(inputData.couponUuid))
            throw new nestjs_grpc_exceptions_1.GrpcInvalidArgumentException('coupon의 couponUuid에 대한 값이 빠져있습니다');
        if ((0, is_null_function_1.default)(inputData.issuerUuid))
            throw new nestjs_grpc_exceptions_1.GrpcInvalidArgumentException('coupon의 issuerUuid에 대한 값이 빠져있습니다');
        if ((0, is_null_function_1.default)(inputData.productUuid))
            throw new nestjs_grpc_exceptions_1.GrpcInvalidArgumentException('coupon의 productUuid에 대한 값이 빠져있습니다');
        if ((0, is_null_function_1.default)(inputData.useRequestDate))
            throw new nestjs_grpc_exceptions_1.GrpcInvalidArgumentException('coupon의 useRequestDate에 대한 값이 빠져있습니다');
    }
}
exports.UseCouponCommand = UseCouponCommand;
//# sourceMappingURL=use.coupon.command.js.map