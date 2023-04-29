"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponController = void 0;
const common_1 = require("@nestjs/common");
const coupon_service_dto_mapper_1 = require("./dto/coupon.service.dto.mapper");
const reigster_coupon_request_1 = require("./dto/request/reigster.coupon.request");
const update_coupon_request_1 = require("./dto/request/update.coupon.request");
const issue_coupon_request_1 = require("./dto/request/issue.coupon.request");
const use_couopn_request_1 = require("./dto/request/use.couopn.request");
const cancle_coupon_request_1 = require("./dto/request/cancle.coupon.request");
const get_coupons_service_1 = require("../../../../application/service/get.coupons.service");
const get_coupons_request_1 = require("./dto/request/get.coupons.request");
let CouponController = class CouponController {
    constructor(registerCouponService, updateCouponService, queueIssuranceService, useCouponService, cancleCouponService, getCouponsServcie, couponServiceMapper) {
        this.registerCouponService = registerCouponService;
        this.updateCouponService = updateCouponService;
        this.queueIssuranceService = queueIssuranceService;
        this.useCouponService = useCouponService;
        this.cancleCouponService = cancleCouponService;
        this.getCouponsServcie = getCouponsServcie;
        this.couponServiceMapper = couponServiceMapper;
    }
    async getCouopns(getCouponsRequest, page, size) {
        const data = await this.getCouponsServcie.getCoupons(this.couponServiceMapper.toGetCouponsCommand(getCouponsRequest, page, size));
        return { statusCode: 200, message: 'ok', data };
    }
    async registerCoupon(registerCouponRequest) {
        await this.registerCouponService.registerCoupon(this.couponServiceMapper.toRegisterCommand(registerCouponRequest));
        return { statusCode: 201, message: 'created' };
    }
    async updateCoupon(updateCouponRequest, couponUuid) {
        await this.updateCouponService.updateCoupon(this.couponServiceMapper.toUpdateCommand(updateCouponRequest, couponUuid));
        return { statusCode: 200, message: 'ok' };
    }
    async issueCoupon(issueCouopnRequest, couponUuid) {
        await this.queueIssuranceService.registerIssuranceQueue(this.couponServiceMapper.toQueueIssuranceCommand(issueCouopnRequest, couponUuid));
        return { statusCode: 200, message: 'ok' };
    }
    async useCoupon(useCouopnRequest, couponUuid) {
        await this.useCouponService.useCoupon(this.couponServiceMapper.toUseCommand(useCouopnRequest, couponUuid));
        return { statusCode: 200, message: 'ok' };
    }
    async cancleCoupon(cancleCouponRequest, couponUuid) {
        await this.cancleCouponService.cancleUseCoupon(this.couponServiceMapper.toCancleCommand(cancleCouponRequest, couponUuid));
        return { statusCode: 200, message: 'ok' };
    }
};
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('size')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_coupons_request_1.GetCouponsRequest, Number, Number]),
    __metadata("design:returntype", Promise)
], CouponController.prototype, "getCouopns", null);
__decorate([
    (0, common_1.HttpCode)(201),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reigster_coupon_request_1.RegisterCouponRequest]),
    __metadata("design:returntype", Promise)
], CouponController.prototype, "registerCoupon", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Patch)('/:couponUuid'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('couponUuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_coupon_request_1.UpdateCouponRequest, String]),
    __metadata("design:returntype", Promise)
], CouponController.prototype, "updateCoupon", null);
__decorate([
    (0, common_1.HttpCode)(201),
    (0, common_1.Post)('/:couponUuid/issue'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('couponUuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [issue_coupon_request_1.IssueCouponRequest, String]),
    __metadata("design:returntype", Promise)
], CouponController.prototype, "issueCoupon", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('/:couponUuid/use'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('couponUuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [use_couopn_request_1.UseCouponRequest, String]),
    __metadata("design:returntype", Promise)
], CouponController.prototype, "useCoupon", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('/:couponUuid/cancle'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('couponUuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cancle_coupon_request_1.CancleCouponRequest, String]),
    __metadata("design:returntype", Promise)
], CouponController.prototype, "cancleCoupon", null);
CouponController = __decorate([
    (0, common_1.Controller)('/coupons'),
    __param(0, (0, common_1.Inject)('REGISTER_COUPON_USECASE')),
    __param(1, (0, common_1.Inject)('UPDATE_COUPON_USECASE')),
    __param(2, (0, common_1.Inject)('QUEUE_ISSURANCE_USECASE')),
    __param(3, (0, common_1.Inject)('USE_COUPON_USECASE')),
    __param(4, (0, common_1.Inject)('CANCLE_COUPON_USECASE')),
    __param(5, (0, common_1.Inject)('GET_COUPONS_USECASE')),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, get_coupons_service_1.GetCouponsService,
        coupon_service_dto_mapper_1.CouponServiceDtoMapper])
], CouponController);
exports.CouponController = CouponController;
//# sourceMappingURL=coupon.controller.js.map