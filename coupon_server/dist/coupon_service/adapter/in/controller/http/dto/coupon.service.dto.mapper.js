"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponServiceDtoMapper = void 0;
const registercoupon_command_1 = require("../../../../../application/dto/command/registercoupon.command");
const update_coupon_command_1 = require("../../../../../application/dto/command/update.coupon.command");
const use_coupon_command_1 = require("../../../../../application/dto/command/use.coupon.command");
const cancle_coupon_command_1 = require("../../../../../application/dto/command/cancle.coupon.command");
const get_coupons_command_1 = require("../../../../../application/dto/command/get.coupons.command");
const queue_issurance_command_1 = require("../../../../../application/dto/command/queue.issurance.command");
class CouponServiceDtoMapper {
    toRegisterCommand(request) {
        return new registercoupon_command_1.RegisterCouponCommand(Object.assign({}, request));
    }
    toUpdateCommand(request, couponUuid) {
        return new update_coupon_command_1.UpdateCouponCommand(Object.assign(Object.assign({}, request), { couponUuid }));
    }
    toUseCommand(request, couponUuid) {
        return new use_coupon_command_1.UseCouponCommand(Object.assign(Object.assign({}, request), { couponUuid }));
    }
    toCancleCommand(request, couponUuid) {
        return new cancle_coupon_command_1.CancleCouponCommand(Object.assign(Object.assign({}, request), { couponUuid }));
    }
    toGetCouponsCommand(request, page, size) {
        return new get_coupons_command_1.GetCouponsCommand(Object.assign(Object.assign({}, request), { page, size }));
    }
    toQueueIssuranceCommand(request, couponUuid) {
        return new queue_issurance_command_1.QueueIssuranceCommand(Object.assign(Object.assign({}, request), { couponUuid }));
    }
}
exports.CouponServiceDtoMapper = CouponServiceDtoMapper;
//# sourceMappingURL=coupon.service.dto.mapper.js.map