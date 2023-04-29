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
exports.IssuranceCouponEventHandler = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const event_mapper_1 = require("./event.mapper");
let IssuranceCouponEventHandler = class IssuranceCouponEventHandler {
    constructor(issueCouponService, eventMapper) {
        this.issueCouponService = issueCouponService;
        this.eventMapper = eventMapper;
    }
    async handleCreateIssuranceEvent(job) {
        await this.issueCouponService.issueCoupon(this.eventMapper.toCreateIssurance(job.data));
    }
};
__decorate([
    (0, bull_1.Process)('issurance'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IssuranceCouponEventHandler.prototype, "handleCreateIssuranceEvent", null);
IssuranceCouponEventHandler = __decorate([
    (0, bull_1.Processor)('issue_coupon'),
    __param(0, (0, common_1.Inject)('ISSUE_COUPON_USECASE')),
    __metadata("design:paramtypes", [Object, event_mapper_1.EventMapper])
], IssuranceCouponEventHandler);
exports.IssuranceCouponEventHandler = IssuranceCouponEventHandler;
//# sourceMappingURL=issurance.coupon.event.handler.js.map