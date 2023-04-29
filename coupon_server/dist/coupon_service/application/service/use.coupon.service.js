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
exports.UseCouponService = void 0;
const coupon_issue_domain_service_1 = require("../../domain/coupon.issurance/service/coupon.issue.domain.service");
const common_1 = require("@nestjs/common");
const coupon_issurance_reader_adapter_1 = require("../../adapter/out/persistence/issurance/adapter/coupon.issurance.reader.adapter");
let UseCouponService = class UseCouponService {
    constructor(issuranceStoreAdapter, issuranceReadAdaptor, issueCouponDomainService) {
        this.issuranceStoreAdapter = issuranceStoreAdapter;
        this.issuranceReadAdaptor = issuranceReadAdaptor;
        this.issueCouponDomainService = issueCouponDomainService;
    }
    async useCoupon(command) {
        const issurance = await this.issuranceReadAdaptor.getIssuranceByIssuerUuidAndCouponUuid(command.issuerUuid, command.couponUuid);
        issurance.checkAlreadyUseCoupon();
        this.issueCouponDomainService.isCanUseCouponDate(issurance, command.useRequestDate);
        issurance.useCoupon(command.productUuid);
        this.issuranceStoreAdapter.update(issurance);
    }
};
UseCouponService = __decorate([
    __param(0, (0, common_1.Inject)('ISSURANCE_STORE_OUTPORT')),
    __param(1, (0, common_1.Inject)('ISSURANCE_READER_OUTPORT')),
    __metadata("design:paramtypes", [Object, coupon_issurance_reader_adapter_1.IssuranceReaderAdapter,
        coupon_issue_domain_service_1.IssueCouponDomainService])
], UseCouponService);
exports.UseCouponService = UseCouponService;
//# sourceMappingURL=use.coupon.service.js.map