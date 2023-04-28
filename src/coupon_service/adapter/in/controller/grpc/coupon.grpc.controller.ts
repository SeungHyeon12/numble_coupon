import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CancleCouponUsecase } from 'src/coupon_service/application/port/in/usecase/cancle.coupon.usecase';
import { QueueIssuranceUseCase } from 'src/coupon_service/application/port/in/usecase/queue.issurance.usecase';
import { RegisterCouponUseCase } from 'src/coupon_service/application/port/in/usecase/register.coupon.uscase';
import { UpdateCouponUseCase } from 'src/coupon_service/application/port/in/usecase/update.coupon.command';
import { UseCouponUseCase } from 'src/coupon_service/application/port/in/usecase/use.coupon.usecase';
import { GetCouponsService } from 'src/coupon_service/application/service/get.coupons.service';
import { CouponServiceDtoMapper } from '../http/dto/coupon.service.dto.mapper';
import { IRegisterCoupon } from './dto/register.coupon.interface';
import { RegisterCouponCommand } from 'src/coupon_service/application/dto/command/registercoupon.command';
import { IGetCoupons } from './dto/get.coupons.interface';
import { GetCouponsCommand } from 'src/coupon_service/application/dto/command/get.coupons.command';
import { IUpdateCoupon } from './dto/update.coupon.interface';
import { UpdateCouponCommand } from 'src/coupon_service/application/dto/command/update.coupon.command';
import { QueueIssuranceCommand } from 'src/coupon_service/application/dto/command/queue.issurance.command';
import { IIssueCoupon } from './dto/issue.coupon.interface';
import { IUseCoupon } from './dto/use.coupon.interface';
import { UseCouponCommand } from 'src/coupon_service/application/dto/command/use.coupon.command';
import { ICancleCoupon } from './dto/cancle.couopn.interface';
import { CancleCouponCommand } from 'src/coupon_service/application/dto/command/cancle.coupon.command';

@Controller()
export class CouponGrpcController {
  constructor(
    @Inject('REGISTER_COUPON_USECASE')
    private readonly registerCouponService: RegisterCouponUseCase,
    @Inject('UPDATE_COUPON_USECASE')
    private readonly updateCouponService: UpdateCouponUseCase,
    @Inject('QUEUE_ISSURANCE_USECASE')
    private readonly queueIssuranceService: QueueIssuranceUseCase,
    @Inject('USE_COUPON_USECASE')
    private readonly useCouponService: UseCouponUseCase,
    @Inject('CANCLE_COUPON_USECASE')
    private readonly cancleCouponService: CancleCouponUsecase,
    @Inject('GET_COUPONS_USECASE')
    private readonly getCouponsServcie: GetCouponsService,
    private readonly couponServiceMapper: CouponServiceDtoMapper,
  ) {}

  @GrpcMethod('CouponGrpcController', 'registerCoupon')
  async registerCoupon(request: IRegisterCoupon, metaData: any) {
    await this.registerCouponService.registerCoupon(
      new RegisterCouponCommand({ ...request }),
    );
    return {
      statusCode: 0,
      message: 'created',
    };
  }

  @GrpcMethod('CouponGrpcController', 'getCoupons')
  async getCouopns(request: IGetCoupons, metaData: any) {
    const coupons = await this.getCouponsServcie.getCoupons(
      new GetCouponsCommand({ ...request }),
    );
    return {
      data: [...coupons],
      statusCode: 0,
      message: 'created',
    };
  }

  @GrpcMethod('CouponGrpcController', 'updateCoupon')
  async updateCoupon(request: IUpdateCoupon, metaData: any) {
    await this.updateCouponService.updateCoupon(
      new UpdateCouponCommand({ ...request }),
    );
    return {
      statusCode: 0,
      message: 'ok',
    };
  }

  @GrpcMethod('CouponGrpcController', 'issueCoupon')
  async issueCoupon(request: IIssueCoupon, metaData: any) {
    await this.queueIssuranceService.registerIssuranceQueue(
      new QueueIssuranceCommand({ ...request }),
    );
    return {
      statusCode: 0,
      message: 'ok',
    };
  }

  @GrpcMethod('CouponGrpcController', 'useCoupon')
  async useCoupon(request: IUseCoupon, metaData: any) {
    await this.useCouponService.useCoupon(new UseCouponCommand({ ...request }));
    return {
      statusCode: 0,
      message: 'ok',
    };
  }

  @GrpcMethod('CouponGrpcController', 'cancleCoupon')
  async cancleCoupon(request: ICancleCoupon, metaData: any) {
    await this.cancleCouponService.cancleUseCoupon(
      new CancleCouponCommand({ ...request }),
    );
    return {
      statusCode: 0,
      message: 'ok',
    };
  }
}
