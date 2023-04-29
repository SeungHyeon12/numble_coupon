import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CancleCouponUsecase } from 'src/coupon_service/application/port/in/usecase/cancle.coupon.usecase';
import { QueueIssuranceUseCase } from 'src/coupon_service/application/port/in/usecase/queue.issurance.usecase';
import { RegisterCouponUseCase } from 'src/coupon_service/application/port/in/usecase/register.coupon.uscase';
import { UpdateCouponUseCase } from 'src/coupon_service/application/port/in/usecase/update.coupon.command';
import { UseCouponUseCase } from 'src/coupon_service/application/port/in/usecase/use.coupon.usecase';
import { GetCouponsService } from 'src/coupon_service/application/service/get.coupons.service';
import { CouponServiceDtoMapper } from '../http/dto/coupon.service.dto.mapper';
import { GetCouponsCommand } from 'src/coupon_service/application/dto/command/get.coupons.command';
import { UpdateCouponCommand } from 'src/coupon_service/application/dto/command/update.coupon.command';
import { QueueIssuranceCommand } from 'src/coupon_service/application/dto/command/queue.issurance.command';
import { IUseCoupon } from './dto/request/use.coupon.interface';
import { UseCouponCommand } from 'src/coupon_service/application/dto/command/use.coupon.command';
import { CancleCouponCommand } from 'src/coupon_service/application/dto/command/cancle.coupon.command';
import { IRegisterCoupon } from './dto/request/register.coupon.interface';
import { IGetCoupons } from './dto/request/get.coupons.interface';
import { IUpdateCoupon } from './dto/request/update.coupon.interface';
import { IIssueCoupon } from './dto/request/issue.coupon.interface';
import { ICancleCoupon } from './dto/request/cancle.couopn.interface';
import { GrpcDtoMapper } from './dto/dto.mapper';
import { CommonResponse } from 'src/common/response/common.response.interface';
import { IDeleteIssurance } from './dto/request/delete.issurance.interface';
import { deleteIssuranceUsecase } from 'src/coupon_service/application/port/in/usecase/delete.issurance.usecase';
import { DeleteIssuranceCommand } from 'src/coupon_service/application/dto/command/delete.issurance.command';

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
    @Inject('DELETE_ISSURANCE_USECASE')
    private readonly deleteIssuranceServce: deleteIssuranceUsecase,
    private readonly grpcDtoMapper: GrpcDtoMapper,
    private readonly couponServiceMapper: CouponServiceDtoMapper,
  ) {}

  @GrpcMethod('CouponGrpcController', 'registerCoupon')
  async registerCoupon(
    request: IRegisterCoupon,
    metaData: any,
  ): Promise<CommonResponse> {
    const couponUuid = await this.registerCouponService.registerCoupon(
      this.grpcDtoMapper.toRegisterCommand(request),
    );
    return {
      statusCode: 0,
      message: 'created',
      data: { couponUuid },
    };
  }

  @GrpcMethod('CouponGrpcController', 'getCoupons')
  async getCouopns(
    request: IGetCoupons,
    metaData: any,
  ): Promise<CommonResponse> {
    const coupons = await this.getCouponsServcie.getCoupons(
      new GetCouponsCommand({ ...request }),
    );
    return {
      data: [...coupons],
      statusCode: 0,
      message: 'ok',
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
  async issueCoupon(
    request: IIssueCoupon,
    metaData: any,
  ): Promise<CommonResponse> {
    await this.queueIssuranceService.registerIssuranceQueue(
      new QueueIssuranceCommand({ ...request }),
    );
    return {
      statusCode: 0,
      message: 'ok',
    };
  }

  @GrpcMethod('CouponGrpcController', 'useCoupon')
  async useCoupon(request: IUseCoupon, metaData: any): Promise<CommonResponse> {
    await this.useCouponService.useCoupon(new UseCouponCommand({ ...request }));
    return {
      statusCode: 0,
      message: 'ok',
    };
  }

  @GrpcMethod('CouponGrpcController', 'cancleCoupon')
  async cancleCoupon(
    request: ICancleCoupon,
    metaData: any,
  ): Promise<CommonResponse> {
    await this.cancleCouponService.cancleUseCoupon(
      new CancleCouponCommand({ ...request }),
    );
    return {
      statusCode: 0,
      message: 'ok',
    };
  }

  @GrpcMethod('CouponGrpcController', 'deleteIssurance')
  async deleteIssurance(
    request: IDeleteIssurance,
    metaData: any,
  ): Promise<CommonResponse> {
    await this.deleteIssuranceServce.deleteIssurance(
      new DeleteIssuranceCommand({ ...request }),
    );
    return {
      statusCode: 0,
      message: 'ok',
    };
  }
}
