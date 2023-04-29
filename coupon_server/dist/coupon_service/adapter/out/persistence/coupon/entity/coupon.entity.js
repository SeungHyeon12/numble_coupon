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
exports.CouponModel = void 0;
const typeorm_1 = require("typeorm");
const coupon_informaiton_embeded_entity_1 = require("./coupon.informaiton.embeded.entity");
const coupon_entity_1 = require("../../../../../domain/coupon/coupon.entity");
let CouponModel = class CouponModel {
    toEntity() {
        return new coupon_entity_1.Coupon({
            couponId: this.couponId,
            couponUuid: this.couponUuid,
            discountType: this.couponInformation.discountType,
            discountValue: this.couponInformation.discountValue,
            couponActiveStartDate: this.couponInformation.couponActiveStartDate,
            couponActiveEndDate: this.couponInformation.couponActiveEndDate,
            issueLimit: this.couponInformation.issueLimit,
        });
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], CouponModel.prototype, "couponId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CouponModel.prototype, "couponUuid", void 0);
__decorate([
    (0, typeorm_1.Column)(() => coupon_informaiton_embeded_entity_1.CouponInformationEmbededModel, { prefix: false }),
    __metadata("design:type", coupon_informaiton_embeded_entity_1.CouponInformationEmbededModel)
], CouponModel.prototype, "couponInformation", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CouponModel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], CouponModel.prototype, "deletedAt", void 0);
CouponModel = __decorate([
    (0, typeorm_1.Entity)({ name: 'coupon' })
], CouponModel);
exports.CouponModel = CouponModel;
//# sourceMappingURL=coupon.entity.js.map