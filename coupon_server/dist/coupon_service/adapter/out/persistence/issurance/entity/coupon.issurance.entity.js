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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponIssuranceModel = void 0;
const typeorm_1 = require("typeorm");
const coupon_issuer_entity_1 = require("./coupon.issuer.entity");
const coupon_entity_1 = require("../../coupon/entity/coupon.entity");
const coupon_issurance_entity_1 = require("../../../../../domain/coupon.issurance/coupon.issurance.entity");
let CouponIssuranceModel = class CouponIssuranceModel {
    toEntity() {
        return new coupon_issurance_entity_1.CouponIssurance({
            issuranceId: this.id,
            isUsedCoupon: this.isUsedCoupon,
            couponIssuedStartDate: this.couponIssuedStartDate,
            couponIssuedEndDate: this.couponIssuedEndDate,
            issuerId: this.couponIssuer.issuerId,
            issuerUuid: this.couponIssuer.issuerUuid,
            productUuid: this.productUuid,
            couponUuid: this.couponUuid,
            issueValidatedDate: this.issueValidatedDate,
            issueCount: this.issueCount,
        });
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], CouponIssuranceModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], CouponIssuranceModel.prototype, "couponIssuedStartDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], CouponIssuranceModel.prototype, "couponIssuedEndDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], CouponIssuranceModel.prototype, "issueValidatedDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], CouponIssuranceModel.prototype, "isUsedCoupon", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CouponIssuranceModel.prototype, "couponUuid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CouponIssuranceModel.prototype, "issueCount", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CouponIssuranceModel.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], CouponIssuranceModel.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CouponIssuranceModel.prototype, "productUuid", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => coupon_issuer_entity_1.CouponIssuerModel, (issuer) => issuer.issuerId),
    __metadata("design:type", coupon_issuer_entity_1.CouponIssuerModel)
], CouponIssuranceModel.prototype, "couponIssuer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => coupon_entity_1.CouponModel, (coupon) => coupon.couponId),
    __metadata("design:type", coupon_entity_1.CouponModel)
], CouponIssuranceModel.prototype, "coupon", void 0);
CouponIssuranceModel = __decorate([
    (0, typeorm_1.Entity)({ name: 'coupon_issurance' })
], CouponIssuranceModel);
exports.CouponIssuranceModel = CouponIssuranceModel;
//# sourceMappingURL=coupon.issurance.entity.js.map