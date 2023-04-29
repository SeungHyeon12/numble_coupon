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
exports.CouponGrpcController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const get_coupons_service_1 = require("../../../../application/service/get.coupons.service");
const coupon_service_dto_mapper_1 = require("../http/dto/coupon.service.dto.mapper");
const get_coupons_command_1 = require("../../../../application/dto/command/get.coupons.command");
const update_coupon_command_1 = require("../../../../application/dto/command/update.coupon.command");
const queue_issurance_command_1 = require("../../../../application/dto/command/queue.issurance.command");
const use_coupon_command_1 = require("../../../../application/dto/command/use.coupon.command");
const cancle_coupon_command_1 = require("../../../../application/dto/command/cancle.coupon.command");
const dto_mapper_1 = require("./dto/dto.mapper");
let CouponGrpcController = class CouponGrpcController {
    constructor(registerCouponService, updateCouponService, queueIssuranceService, useCouponService, cancleCouponService, getCouponsServcie, grpcDtoMapper, couponServiceMapper) {
        this.registerCouponService = registerCouponService;
        this.updateCouponService = updateCouponService;
        this.queueIssuranceService = queueIssuranceService;
        this.useCouponService = useCouponService;
        this.cancleCouponService = cancleCouponService;
        this.getCouponsServcie = getCouponsServcie;
        this.grpcDtoMapper = grpcDtoMapper;
        this.couponServiceMapper = couponServiceMapper;
    }
    async registerCoupon(request, metaData) {
        await this.registerCouponService.registerCoupon(this.grpcDtoMapper.toRegisterCommand(request));
        return {
            statusCode: 0,
            message: 'created',
        };
    }
    async getCouopns(request, metaData) {
        const coupons = await this.getCouponsServcie.getCoupons(new get_coupons_command_1.GetCouponsCommand(Object.assign({}, request)));
        return {
            data: [...coupons],
            statusCode: 0,
            message: 'ok',
        };
    }
    async updateCoupon(request, metaData) {
        await this.updateCouponService.updateCoupon(new update_coupon_command_1.UpdateCouponCommand(Object.assign({}, request)));
        return {
            statusCode: 0,
            message: 'ok',
        };
    }
    async issueCoupon(request, metaData) {
        await this.queueIssuranceService.registerIssuranceQueue(new queue_issurance_command_1.QueueIssuranceCommand(Object.assign({}, request)));
        return {
            statusCode: 0,
            message: 'ok',
        };
    }
    async useCoupon(request, metaData) {
        await this.useCouponService.useCoupon(new use_coupon_command_1.UseCouponCommand(Object.assign({}, request)));
        return {
            statusCode: 0,
            message: 'ok',
        };
    }
    async cancleCoupon(request, metaData) {
        await this.cancleCouponService.cancleUseCoupon(new cancle_coupon_command_1.CancleCouponCommand(Object.assign({}, request)));
        return {
            statusCode: 0,
            message: 'ok',
        };
    }
};
__decorate([
    (0, microservices_1.GrpcMethod)('CouponGrpcController', 'registerCoupon'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CouponGrpcController.prototype, "registerCoupon", null);
__decorate([
    (0, microservices_1.GrpcMethod)('CouponGrpcController', 'getCoupons'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CouponGrpcController.prototype, "getCouopns", null);
__decorate([
    (0, microservices_1.GrpcMethod)('CouponGrpcController', 'updateCoupon'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CouponGrpcController.prototype, "updateCoupon", null);
__decorate([
    (0, microservices_1.GrpcMethod)('CouponGrpcController', 'issueCoupon'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CouponGrpcController.prototype, "issueCoupon", null);
__decorate([
    (0, microservices_1.GrpcMethod)('CouponGrpcController', 'useCoupon'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CouponGrpcController.prototype, "useCoupon", null);
__decorate([
    (0, microservices_1.GrpcMethod)('CouponGrpcController', 'cancleCoupon'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CouponGrpcController.prototype, "cancleCoupon", null);
CouponGrpcController = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, common_1.Inject)('REGISTER_COUPON_USECASE')),
    __param(1, (0, common_1.Inject)('UPDATE_COUPON_USECASE')),
    __param(2, (0, common_1.Inject)('QUEUE_ISSURANCE_USECASE')),
    __param(3, (0, common_1.Inject)('USE_COUPON_USECASE')),
    __param(4, (0, common_1.Inject)('CANCLE_COUPON_USECASE')),
    __param(5, (0, common_1.Inject)('GET_COUPONS_USECASE')),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, get_coupons_service_1.GetCouponsService,
        dto_mapper_1.GrpcDtoMapper,
        coupon_service_dto_mapper_1.CouponServiceDtoMapper])
], CouponGrpcController);
exports.CouponGrpcController = CouponGrpcController;
//# sourceMappingURL=coupon.grpc.controller.js.map