"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterCouponCommand = void 0;
const nestjs_grpc_exceptions_1 = require("nestjs-grpc-exceptions");
const is_null_function_1 = require("../../../../common/function/is.null.function");
class RegisterCouponCommand {
    constructor(inputData) {
        this.validateInputData(inputData);
        this.issueLimit = inputData.issueLimit;
        this.discountType = inputData.discountType;
        this.discountValue = inputData.discountValue;
        this.couponActiveStartDate = inputData.couponActiveStartDate;
        this.couponActiveEndDate = inputData.couponActiveEndDate;
    }
    validateInputData(inputData) {
        if ((0, is_null_function_1.default)(inputData.issueLimit))
            throw new nestjs_grpc_exceptions_1.GrpcInvalidArgumentException('coupon의 issueLimit에 대한 값이 빠져있습니다');
        if ((0, is_null_function_1.default)(inputData.discountType))
            throw new nestjs_grpc_exceptions_1.GrpcInvalidArgumentException('coupon의 discountType에 대한 값이 빠져있습니다');
        if ((0, is_null_function_1.default)(inputData.discountValue))
            throw new nestjs_grpc_exceptions_1.GrpcInvalidArgumentException('coupon의 discountValue에 대한 값이 빠져있습니다');
        if ((0, is_null_function_1.default)(inputData.couponActiveStartDate))
            throw new nestjs_grpc_exceptions_1.GrpcInvalidArgumentException('coupon의 couponActiveStartDate에 대한 값이 빠져있습니다');
        if ((0, is_null_function_1.default)(inputData.couponActiveEndDate))
            throw new nestjs_grpc_exceptions_1.GrpcInvalidArgumentException('coupon의 couponActiveEndDate에 대한 값이 빠져있습니다');
    }
}
exports.RegisterCouponCommand = RegisterCouponCommand;
//# sourceMappingURL=registercoupon.command.js.map