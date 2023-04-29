import { CancleCouponUsecase } from 'src/coupon_service/application/port/in/usecase/cancle.coupon.usecase';
import { QueueIssuranceUseCase } from 'src/coupon_service/application/port/in/usecase/queue.issurance.usecase';
import { RegisterCouponUseCase } from 'src/coupon_service/application/port/in/usecase/register.coupon.uscase';
import { UpdateCouponUseCase } from 'src/coupon_service/application/port/in/usecase/update.coupon.command';
import { UseCouponUseCase } from 'src/coupon_service/application/port/in/usecase/use.coupon.usecase';
import { GetCouponsService } from 'src/coupon_service/application/service/get.coupons.service';
import { CouponServiceDtoMapper } from '../http/dto/coupon.service.dto.mapper';
import { IUseCoupon } from './dto/request/use.coupon.interface';
import { IRegisterCoupon } from './dto/request/register.coupon.interface';
import { IGetCoupons } from './dto/request/get.coupons.interface';
import { IUpdateCoupon } from './dto/request/update.coupon.interface';
import { IIssueCoupon } from './dto/request/issue.coupon.interface';
import { ICancleCoupon } from './dto/request/cancle.couopn.interface';
import { GrpcDtoMapper } from './dto/dto.mapper';
export declare class CouponGrpcController {
    private readonly registerCouponService;
    private readonly updateCouponService;
    private readonly queueIssuranceService;
    private readonly useCouponService;
    private readonly cancleCouponService;
    private readonly getCouponsServcie;
    private readonly grpcDtoMapper;
    private readonly couponServiceMapper;
    constructor(registerCouponService: RegisterCouponUseCase, updateCouponService: UpdateCouponUseCase, queueIssuranceService: QueueIssuranceUseCase, useCouponService: UseCouponUseCase, cancleCouponService: CancleCouponUsecase, getCouponsServcie: GetCouponsService, grpcDtoMapper: GrpcDtoMapper, couponServiceMapper: CouponServiceDtoMapper);
    registerCoupon(request: IRegisterCoupon, metaData: any): Promise<{
        statusCode: number;
        message: string;
    }>;
    getCouopns(request: IGetCoupons, metaData: any): Promise<{
        data: {
            issueLimit: number;
            discountType: import("../../../../domain/coupon.issurance/vo/discount.type").DISCOUNT_TYPE;
            discountValue: number;
            couponActiveStartDate: Date;
            couponActiveEndDate: Date;
            couponId: number;
            couponUuid: string;
        }[];
        statusCode: number;
        message: string;
    }>;
    updateCoupon(request: IUpdateCoupon, metaData: any): Promise<{
        statusCode: number;
        message: string;
    }>;
    issueCoupon(request: IIssueCoupon, metaData: any): Promise<{
        statusCode: number;
        message: string;
    }>;
    useCoupon(request: IUseCoupon, metaData: any): Promise<{
        statusCode: number;
        message: string;
    }>;
    cancleCoupon(request: ICancleCoupon, metaData: any): Promise<{
        statusCode: number;
        message: string;
    }>;
}
