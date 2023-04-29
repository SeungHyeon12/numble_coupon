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
exports.CouponInformationEmbededModel = void 0;
const discount_type_1 = require("../../../../../domain/coupon.issurance/vo/discount.type");
const typeorm_1 = require("typeorm");
class CouponInformationEmbededModel {
}
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], CouponInformationEmbededModel.prototype, "couponActiveStartDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], CouponInformationEmbededModel.prototype, "couponActiveEndDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: discount_type_1.DISCOUNT_TYPE,
    }),
    __metadata("design:type", String)
], CouponInformationEmbededModel.prototype, "discountType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CouponInformationEmbededModel.prototype, "discountValue", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CouponInformationEmbededModel.prototype, "issueLimit", void 0);
exports.CouponInformationEmbededModel = CouponInformationEmbededModel;
//# sourceMappingURL=coupon.informaiton.embeded.entity.js.map