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
exports.CancleCouponService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_grpc_exceptions_1 = require("nestjs-grpc-exceptions");
let CancleCouponService = class CancleCouponService {
    constructor(issuranceStoreAdaptor, issuranceReadAdaptor, issuranceStoreAdapter) {
        this.issuranceStoreAdaptor = issuranceStoreAdaptor;
        this.issuranceReadAdaptor = issuranceReadAdaptor;
        this.issuranceStoreAdapter = issuranceStoreAdapter;
    }
    async cancleUseCoupon(command) {
        const issurance = await this.issuranceReadAdaptor.getIssuranceByIssuerUuidAndCouponUuid(command.issuerUuid, command.couponUuid);
        if (!issurance)
            throw new nestjs_grpc_exceptions_1.GrpcNotFoundException('해당하는 발급내역이 없습니다');
        issurance.cancleCoupon();
        this.issuranceStoreAdaptor.update(issurance);
    }
};
CancleCouponService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ISSURANCE_STORE_OUTPORT')),
    __param(1, (0, common_1.Inject)('ISSURANCE_READER_OUTPORT')),
    __param(2, (0, common_1.Inject)('ISSURANCE_STORE_OUTPORT')),
    __metadata("design:paramtypes", [Object, Object, Object])
], CancleCouponService);
exports.CancleCouponService = CancleCouponService;
//# sourceMappingURL=cancle.coupon.service.js.map