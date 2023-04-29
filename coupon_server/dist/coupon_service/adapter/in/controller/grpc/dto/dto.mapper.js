"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcDtoMapper = void 0;
const registercoupon_command_1 = require("../../../../../application/dto/command/registercoupon.command");
const update_coupon_command_1 = require("../../../../../application/dto/command/update.coupon.command");
class GrpcDtoMapper {
    toRegisterCommand(request) {
        return new registercoupon_command_1.RegisterCouponCommand(Object.assign(Object.assign({}, request), { couponActiveEndDate: new Date(request.couponActiveEndDate), couponActiveStartDate: new Date(request.couponActiveStartDate) }));
    }
    toUpdateCommand(request) {
        return new update_coupon_command_1.UpdateCouponCommand(Object.assign({}, request));
    }
}
exports.GrpcDtoMapper = GrpcDtoMapper;
//# sourceMappingURL=dto.mapper.js.map