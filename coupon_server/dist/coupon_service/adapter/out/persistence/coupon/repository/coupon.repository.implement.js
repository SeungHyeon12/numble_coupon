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
exports.CouponRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const coupon_entity_1 = require("../entity/coupon.entity");
let CouponRepository = class CouponRepository {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    create(coupon) {
        const properties = coupon.getProperties();
        this.dataSource
            .createQueryBuilder()
            .insert()
            .into(coupon_entity_1.CouponModel)
            .values({
            couponUuid: properties.couponUuid,
            couponInformation: Object.assign({}, properties.couponInformation),
        })
            .execute();
    }
    async getByCouponUuid(couponUuid) {
        const coupon = await this.dataSource
            .createQueryBuilder(coupon_entity_1.CouponModel, 'coupon')
            .select('coupon')
            .where('coupon.couponUuid = :couponUuid', {
            couponUuid,
        })
            .getOne();
        if (!coupon)
            return null;
        return coupon.toEntity();
    }
    update(coupon) {
        const properties = coupon.getProperties();
        this.dataSource
            .createQueryBuilder()
            .update(coupon_entity_1.CouponModel)
            .set({
            couponInformation: properties.couponInformation,
        })
            .where('couponUuid = :couponUuid', { couponUuid: properties.couponUuid })
            .execute();
    }
};
CouponRepository = __decorate([
    __param(0, (0, common_1.Inject)('DATA_SOURCE')),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], CouponRepository);
exports.CouponRepository = CouponRepository;
//# sourceMappingURL=coupon.repository.implement.js.map