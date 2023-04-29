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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuranceRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const coupon_issurance_entity_1 = require("../entity/coupon.issurance.entity");
const coupon_entity_1 = require("../../coupon/entity/coupon.entity");
const coupon_issuer_entity_1 = require("../entity/coupon.issuer.entity");
const nestjs_grpc_exceptions_1 = require("nestjs-grpc-exceptions");
let IssuranceRepository = class IssuranceRepository {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async create(issurance) {
        const _a = issurance.getProperties(), { issuranceId } = _a, rest = __rest(_a, ["issuranceId"]);
        const couponModel = await this.dataSource
            .createQueryBuilder(coupon_entity_1.CouponModel, 'coupon')
            .select('coupon')
            .where('coupon.couponUuid = :couponUuid', {
            couponUuid: issurance.getCouponUuid().getValue(),
        })
            .getOne();
        if (!couponModel)
            throw new nestjs_grpc_exceptions_1.GrpcNotFoundException('해당 쿠폰이 없습니다');
        const issuerModel = await this.dataSource
            .createQueryBuilder(coupon_issuer_entity_1.CouponIssuerModel, 'issuer')
            .select('issuer')
            .where('issuer.issuerUuid = :issuerUuid', {
            issuerUuid: issurance.getProperties().couponIssuer.issuerUuid,
        })
            .getOne();
        this.dataSource
            .createQueryBuilder()
            .insert()
            .into(coupon_issurance_entity_1.CouponIssuranceModel)
            .values(Object.assign(Object.assign({}, rest), { coupon: couponModel, couponIssuer: issuerModel }))
            .execute();
    }
    async createIssuer(issuerUuid) {
        const issuer = await this.dataSource
            .createQueryBuilder(coupon_issuer_entity_1.CouponIssuerModel, 'issuer')
            .select('issuer')
            .where('issuer.issuerUuid = :issuerUuid', {
            issuerUuid,
        })
            .getOne();
        if (issuer)
            return;
        await this.dataSource
            .createQueryBuilder()
            .insert()
            .into(coupon_issuer_entity_1.CouponIssuerModel)
            .values({ issuerUuid })
            .execute();
    }
    async getIssuranceByIssuerUuidAndCouponUuid(issuerUuid, couponUuid) {
        const issurance = await this.dataSource
            .createQueryBuilder(coupon_issurance_entity_1.CouponIssuranceModel, 'issurance')
            .select('issurance')
            .leftJoinAndSelect('issurance.couponIssuer', 'issuer')
            .where('issuer.issuerUuid = :issuerUuid', { issuerUuid })
            .andWhere('issurance.couponUuid = :couponUuid', { couponUuid })
            .getOne();
        if (!issurance)
            return null;
        return issurance.toEntity();
    }
    async update(issurance) {
        const _a = issurance.getProperties(), { issuranceId } = _a, properties = __rest(_a, ["issuranceId"]);
        this.dataSource
            .createQueryBuilder()
            .update(coupon_issurance_entity_1.CouponIssuranceModel)
            .set(Object.assign({}, properties))
            .where('id = :id', { id: issurance.getProperties().issuranceId })
            .execute();
    }
    deleteByIssuerUuidAndCouonUuid(issuerUuid, couponUuid) {
        this.dataSource
            .createQueryBuilder(coupon_issurance_entity_1.CouponIssuranceModel, 'issuer')
            .softDelete()
            .where('issuer.issuerUuid = :issuerUuid', { issuerUuid })
            .andWhere('couponUuid = :couponUuid', { couponUuid })
            .execute();
    }
    async getCouponsByIssuerUuidAndRequestDate(issuerUuid, requestDate, take, skip) {
        const issurances = await this.dataSource
            .createQueryBuilder(coupon_issurance_entity_1.CouponIssuranceModel, 'issue')
            .leftJoinAndSelect('issue.coupon', 'coupon')
            .leftJoinAndSelect('issue.couponIssuer', 'user')
            .where('user.issuerUuid = :issuerUuid', { issuerUuid })
            .andWhere('issue.issueValidatedDate > :requestDate', { requestDate })
            .take(take)
            .skip(skip)
            .getMany();
        const coupons = issurances.map((issurance) => issurance.coupon.toEntity());
        return coupons;
    }
    async getIssuranceByCouponUuid(couponUuid) {
        const issurance = await this.dataSource
            .createQueryBuilder(coupon_issurance_entity_1.CouponIssuranceModel, 'issue')
            .leftJoinAndSelect('issue.couponIssuer', 'user')
            .where('issue.couponUuid = :couponUuid', { couponUuid })
            .orderBy('issue.id', 'DESC')
            .getOne();
        if (!issurance)
            return null;
        return issurance.toEntity();
    }
};
IssuranceRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DATA_SOURCE')),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], IssuranceRepository);
exports.IssuranceRepository = IssuranceRepository;
//# sourceMappingURL=issurance.repository.implement.js.map