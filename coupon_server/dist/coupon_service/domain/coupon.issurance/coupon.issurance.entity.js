"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponIssurance = void 0;
const coupon_issuer_entity_1 = require("./coupon.issuer.entity");
const coupon_uuid_1 = require("../coupon/vo/coupon.uuid");
const coupon_issue_date_1 = require("./vo/coupon.issue.date");
const product_uuid_1 = require("./vo/product.uuid");
const nestjs_grpc_exceptions_1 = require("nestjs-grpc-exceptions");
class CouponIssurance {
    constructor(issueData) {
        this.issuranceId = issueData.issuranceId;
        this.couponIssuer = new coupon_issuer_entity_1.CouponIssuer({
            issuerId: issueData.issuerId,
            issuerUuid: issueData.issuerUuid,
        });
        this.productUuid = new product_uuid_1.ProductUuid(issueData.productUuid);
        this.issueValidatedDate = issueData.issueValidatedDate;
        this.couponIssueDate = new coupon_issue_date_1.CouponIssueDate(issueData.couponIssuedStartDate, issueData.couponIssuedEndDate);
        this.isUsedCoupon = issueData.isUsedCoupon;
        this.couponUuid = new coupon_uuid_1.CouponUuid(issueData.couponUuid);
        this.issueCount = issueData.issueCount;
    }
    getProperties() {
        return {
            issuranceId: this.issuranceId,
            couponIssuedStartDate: this.couponIssueDate.getcouponIssuedStartDate(),
            couponIssuedEndDate: this.couponIssueDate.getcouponIssuedEndDate(),
            issueValidatedDate: this.issueValidatedDate,
            isUsedCoupon: this.isUsedCoupon,
            couponUuid: this.couponUuid.getValue(),
            productUuid: this.productUuid.getValue(),
            couponIssuer: this.couponIssuer.getProperties(),
            issueCount: this.issueCount,
        };
    }
    getCouponUuid() {
        return this.couponUuid;
    }
    getIssuer() {
        return {
            couponIssuer: this.couponIssuer.getProperties(),
        };
    }
    getCount() {
        return this.issueCount;
    }
    useCoupon(productUuid) {
        this.productUuid = new product_uuid_1.ProductUuid(productUuid);
        this.isUsedCoupon = true;
    }
    checkAlreadyUseCoupon() {
        if (this.isUsedCoupon)
            throw new nestjs_grpc_exceptions_1.GrpcUnavailableException('이미 사용된 쿠폰입니다');
    }
    cancleCoupon() {
        this.productUuid = new product_uuid_1.ProductUuid(null);
        this.isUsedCoupon = false;
    }
    confirmIssueValidateDate(calculatedValidateDate) {
        this.issueValidatedDate = calculatedValidateDate;
    }
    getIssueValidatedDate() {
        return this.issueValidatedDate;
    }
    getIssueDate() {
        return {
            couponIssuedStartDate: this.couponIssueDate.getcouponIssuedStartDate(),
            couponIssuedEndDate: this.couponIssueDate.getcouponIssuedEndDate(),
        };
    }
    static IssueCoupon(issueInputData) {
        return new CouponIssurance(Object.assign(Object.assign({}, issueInputData), { issuranceId: null, issuerId: null, productUuid: null, isUsedCoupon: false, couponIssuedEndDate: null, issueValidatedDate: null }));
    }
}
exports.CouponIssurance = CouponIssurance;
//# sourceMappingURL=coupon.issurance.entity.js.map