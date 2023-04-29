import { CouponServiceDtoMapper } from './dto/coupon.service.dto.mapper';
import { RegisterCouponUseCase } from 'src/coupon_service/application/port/in/usecase/register.coupon.uscase';
import { RegisterCouponRequest } from './dto/request/reigster.coupon.request';
import { UpdateCouponRequest } from './dto/request/update.coupon.request';
import { UpdateCouponUseCase } from 'src/coupon_service/application/port/in/usecase/update.coupon.command';
import { IssueCouponRequest } from './dto/request/issue.coupon.request';
import { UseCouponRequest } from './dto/request/use.couopn.request';
import { UseCouponUseCase } from 'src/coupon_service/application/port/in/usecase/use.coupon.usecase';
import { CancleCouponRequest } from './dto/request/cancle.coupon.request';
import { CancleCouponUsecase } from 'src/coupon_service/application/port/in/usecase/cancle.coupon.usecase';
import { GetCouponsService } from 'src/coupon_service/application/service/get.coupons.service';
import { GetCouponsRequest } from './dto/request/get.coupons.request';
import { QueueIssuranceUseCase } from 'src/coupon_service/application/port/in/usecase/queue.issurance.usecase';
export declare class CouponController {
    private readonly registerCouponService;
    private readonly updateCouponService;
    private readonly queueIssuranceService;
    private readonly useCouponService;
    private readonly cancleCouponService;
    private readonly getCouponsServcie;
    private readonly couponServiceMapper;
    constructor(registerCouponService: RegisterCouponUseCase, updateCouponService: UpdateCouponUseCase, queueIssuranceService: QueueIssuranceUseCase, useCouponService: UseCouponUseCase, cancleCouponService: CancleCouponUsecase, getCouponsServcie: GetCouponsService, couponServiceMapper: CouponServiceDtoMapper);
    getCouopns(getCouponsRequest: GetCouponsRequest, page: number, size: number): Promise<{
        statusCode: number;
        message: string;
        data: {
            issueLimit: number;
            discountType: import("../../../../domain/coupon.issurance/vo/discount.type").DISCOUNT_TYPE;
            discountValue: number;
            couponActiveStartDate: Date;
            couponActiveEndDate: Date;
            couponId: number;
            couponUuid: string;
        }[];
    }>;
    registerCoupon(registerCouponRequest: RegisterCouponRequest): Promise<{
        statusCode: number;
        message: string;
    }>;
    updateCoupon(updateCouponRequest: UpdateCouponRequest, couponUuid: string): Promise<{
        statusCode: number;
        message: string;
    }>;
    issueCoupon(issueCouopnRequest: IssueCouponRequest, couponUuid: string): Promise<{
        statusCode: number;
        message: string;
    }>;
    useCoupon(useCouopnRequest: UseCouponRequest, couponUuid: string): Promise<{
        statusCode: number;
        message: string;
    }>;
    cancleCoupon(cancleCouponRequest: CancleCouponRequest, couponUuid: string): Promise<{
        statusCode: number;
        message: string;
    }>;
}
