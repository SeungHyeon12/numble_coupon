"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCouponDomainService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_grpc_exceptions_1 = require("nestjs-grpc-exceptions");
class IssueCouponDomainService {
    checkCreateCouponExpired(coupon, couponIssuedStartDate) {
        const couponActiveEndDate = coupon
            .getCouponInformation()
            .getActiveDate().couponActiveEndDate;
        if (new Date(couponIssuedStartDate) > new Date(couponActiveEndDate)) {
            throw new common_1.NotAcceptableException('coupon 기간이 만료되어서 발급이 불가능합니다');
        }
    }
    calcualteValidateTime(couponIssurance, coupon) {
        const couponActiveEndDate = coupon
            .getCouponInformation()
            .getActiveDate().couponActiveEndDate;
        const couponIssuedEndDate = couponIssurance.getIssueDate().couponIssuedEndDate;
        const calculatedValidateTime = new Date(couponActiveEndDate) > new Date(couponIssuedEndDate)
            ? couponIssuedEndDate
            : couponActiveEndDate;
        couponIssurance.confirmIssueValidateDate(calculatedValidateTime);
    }
    checkAlreadyIssueCoupon(latestcouponIssurance, couponIssuedStartDate) {
        if (!latestcouponIssurance)
            return;
        if (new Date(latestcouponIssurance.getIssueValidatedDate()) >=
            new Date(couponIssuedStartDate))
            throw new nestjs_grpc_exceptions_1.GrpcUnavailableException('이미 발급된 쿠폰이 존재합니다존재합니다');
    }
    isCanUseCouponDate(issurance, useRequestDate) {
        if (new Date(issurance.getIssueValidatedDate()) < new Date(useRequestDate))
            throw new nestjs_grpc_exceptions_1.GrpcUnavailableException('이미 쿠폰의 유효기간이 지났습니다');
    }
    calculateCouponCount(coupon, lastIssurance) {
        if (!lastIssurance)
            return 1;
        const limit = coupon.getProperties().couponInformation.issueLimit;
        const nextCount = lastIssurance.getCount() + 1;
        if (limit < nextCount)
            throw new nestjs_grpc_exceptions_1.GrpcUnavailableException('쿠폰 발급갯수가 초과되었습니다');
        return nextCount;
    }
}
exports.IssueCouponDomainService = IssueCouponDomainService;
//# sourceMappingURL=coupon.issue.domain.service.js.map