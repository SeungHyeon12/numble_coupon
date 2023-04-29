"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCouponsCommand = void 0;
const nestjs_grpc_exceptions_1 = require("nestjs-grpc-exceptions");
const is_null_function_1 = require("../../../../common/function/is.null.function");
class GetCouponsCommand {
    constructor(inputData) {
        this.issuerUuid = inputData.issuerUuid;
        this.requestDate = inputData.requestDate;
        this.page = inputData.page;
        this.size = inputData.size;
    }
    validateRequiredInputData(inputData) {
        if ((0, is_null_function_1.default)(inputData.issuerUuid))
            throw new nestjs_grpc_exceptions_1.GrpcInvalidArgumentException('쿠폰의 issuerUuid 값이 빠져있습니다');
        if ((0, is_null_function_1.default)(inputData.issuerUuid))
            throw new nestjs_grpc_exceptions_1.GrpcInvalidArgumentException('쿠폰의 requestDate 값이 빠져있습니다');
        if ((0, is_null_function_1.default)(inputData.page))
            throw new nestjs_grpc_exceptions_1.GrpcInvalidArgumentException('쿠폰의 pageSize 값이 빠져있습니다');
        if ((0, is_null_function_1.default)(inputData.size))
            throw new nestjs_grpc_exceptions_1.GrpcInvalidArgumentException('쿠폰의 pageOffset 값이 빠져있습니다');
    }
}
exports.GetCouponsCommand = GetCouponsCommand;
//# sourceMappingURL=get.coupons.command.js.map