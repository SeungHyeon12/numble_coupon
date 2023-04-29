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
exports.IssueCouponService = void 0;
const common_1 = require("@nestjs/common");
const coupon_issue_domain_service_1 = require("../../domain/coupon.issurance/service/coupon.issue.domain.service");
const coupon_issurance_entity_1 = require("../../domain/coupon.issurance/coupon.issurance.entity");
const isssue_coupon_command_1 = require("../dto/command/isssue.coupon.command");
const typeorm_transactional_1 = require("typeorm-transactional");
const nestjs_grpc_exceptions_1 = require("nestjs-grpc-exceptions");
let IssueCouponService = class IssueCouponService {
    constructor(issueCouponDomainService, issuranceStoreAdaptor, issuranceReaderAdaptor, couponReaderAdaptor) {
        this.issueCouponDomainService = issueCouponDomainService;
        this.issuranceStoreAdaptor = issuranceStoreAdaptor;
        this.issuranceReaderAdaptor = issuranceReaderAdaptor;
        this.couponReaderAdaptor = couponReaderAdaptor;
    }
    async issueCoupon(command) {
        const coupon = await this.couponReaderAdaptor.getByCouponUuid(command.couponUuid);
        console.log(coupon);
        if (!coupon)
            throw new nestjs_grpc_exceptions_1.GrpcNotFoundException('해당하는 쿠폰이 없습니다');
        const latestIssuerCouponIssurance = await this.issuranceReaderAdaptor.getIssuranceByIssuerUuidAndCouponUuid(command.issuerUuid, command.couponUuid);
        this.issueCouponDomainService.checkAlreadyIssueCoupon(latestIssuerCouponIssurance, command.couponIssuedStartDate);
        this.issueCouponDomainService.checkCreateCouponExpired(coupon, command.couponIssuedStartDate);
        const lastCouponIssurance = await this.issuranceReaderAdaptor.getIssuranceByCouponUuid(command.couponUuid);
        const nextCount = this.issueCouponDomainService.calculateCouponCount(coupon, lastCouponIssurance);
        const currentIssurance = coupon_issurance_entity_1.CouponIssurance.IssueCoupon(Object.assign(Object.assign({}, command), { couponUuid: coupon.getCouponUuid().getValue(), issueCount: nextCount }));
        this.issueCouponDomainService.calcualteValidateTime(currentIssurance, coupon);
        await this.issuranceStoreAdaptor.createIssuer(command.issuerUuid);
        this.issuranceStoreAdaptor.create(currentIssurance);
    }
};
__decorate([
    (0, typeorm_transactional_1.Transactional)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [isssue_coupon_command_1.IssueCouponCommand]),
    __metadata("design:returntype", Promise)
], IssueCouponService.prototype, "issueCoupon", null);
IssueCouponService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)('ISSURANCE_STORE_OUTPORT')),
    __param(2, (0, common_1.Inject)('ISSURANCE_READER_OUTPORT')),
    __param(3, (0, common_1.Inject)('COUPON_READER_OUTPORT')),
    __metadata("design:paramtypes", [coupon_issue_domain_service_1.IssueCouponDomainService, Object, Object, Object])
], IssueCouponService);
exports.IssueCouponService = IssueCouponService;
//# sourceMappingURL=issue.coupon.service.js.map