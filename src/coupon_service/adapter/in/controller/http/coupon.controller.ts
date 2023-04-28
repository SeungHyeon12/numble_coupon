import {
  Body,
  Controller,
  Get,
  HttpCode,
  Inject,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CouponServiceDtoMapper } from './dto/coupon.service.dto.mapper';
import { RegisterCouponUseCase } from 'src/coupon_service/application/port/in/usecase/register.coupon.uscase';
import { RegisterCouponRequest } from './dto/request/reigster.coupon.request';
import { UpdateCouponRequest } from './dto/request/update.coupon.request';
import { UpdateCouponUseCase } from 'src/coupon_service/application/port/in/usecase/update.coupon.command';
import { IssueCouponUsecase } from 'src/coupon_service/application/port/in/usecase/issue.coupon.usecase';
import { IssueCouponRequest } from './dto/request/issue.coupon.request';
import { UseCouponRequest } from './dto/request/use.couopn.request';
import { UseCouponUseCase } from 'src/coupon_service/application/port/in/usecase/use.coupon.usecase';
import { CancleCouponRequest } from './dto/request/cancle.coupon.request';
import { CancleCouponUsecase } from 'src/coupon_service/application/port/in/usecase/cancle.coupon.usecase';
import { GetCouponsService } from 'src/coupon_service/application/service/get.coupons.service';
import { GetCouponsRequest } from './dto/request/get.coupons.request';

@Controller('/coupons')
export class CouponController {
  constructor(
    @Inject('REGISTER_COUPON_USECASE')
    private readonly registerCouponService: RegisterCouponUseCase,
    @Inject('UPDATE_COUPON_USECASE')
    private readonly updateCouponService: UpdateCouponUseCase,
    @Inject('ISSUE_COUPON_USECASE')
    private readonly issueCouponService: IssueCouponUsecase,
    @Inject('USE_COUPON_USECASE')
    private readonly useCouponService: UseCouponUseCase,
    @Inject('CANCLE_COUPON_USECASE')
    private readonly cancleCouponService: CancleCouponUsecase,
    @Inject('GET_COUPONS_USECASE')
    private readonly getCouponsServcie: GetCouponsService,
    private readonly couponServiceMapper: CouponServiceDtoMapper,
  ) {}

  @HttpCode(200)
  @Get()
  async getCouopns(
    @Body() getCouponsRequest: GetCouponsRequest,
    @Query('page') page: number,
    @Query('size') size: number,
  ) {
    const data = await this.getCouponsServcie.getCoupons(
      this.couponServiceMapper.toGetCouponsCommand(
        getCouponsRequest,
        page,
        size,
      ),
    );
    return { statusCode: 200, message: 'ok', data };
  }

  @HttpCode(201)
  @Post()
  async registerCoupon(@Body() registerCouponRequest: RegisterCouponRequest) {
    await this.registerCouponService.registerCoupon(
      this.couponServiceMapper.toRegisterCommand(registerCouponRequest),
    );
    return { statusCode: 201, message: 'created' };
  }

  @HttpCode(200)
  @Patch('/:couponUuid')
  async updateCoupon(
    @Body() updateCouponRequest: UpdateCouponRequest,
    @Param('couponUuid') couponUuid: string,
  ) {
    await this.updateCouponService.updateCoupon(
      this.couponServiceMapper.toUpdateCommand(updateCouponRequest, couponUuid),
    );
    return { statusCode: 200, message: 'ok' };
  }

  @HttpCode(201)
  @Post('/:couponUuid/issue')
  async issueCoupon(
    @Body() issueCouopnRequest: IssueCouponRequest,
    @Param('couponUuid') couponUuid: string,
  ) {
    await this.issueCouponService.issueCoupon(
      this.couponServiceMapper.toIssueCommand(issueCouopnRequest, couponUuid),
    );
    return { statusCode: 200, message: 'ok' };
  }

  @HttpCode(200)
  @Post('/:couponUuid/use')
  async useCoupon(
    @Body() useCouopnRequest: UseCouponRequest,
    @Param('couponUuid') couponUuid: string,
  ) {
    await this.useCouponService.useCoupon(
      this.couponServiceMapper.toUseCommand(useCouopnRequest, couponUuid),
    );
    return { statusCode: 200, message: 'ok' };
  }

  @HttpCode(200)
  @Post('/:couponUuid/cancle')
  async cancleCoupon(
    @Body() cancleCouponRequest: CancleCouponRequest,
    @Param('couponUuid') couponUuid: string,
  ) {
    await this.cancleCouponService.cancleUseCoupon(
      this.couponServiceMapper.toCancleCommand(cancleCouponRequest, couponUuid),
    );
    return { statusCode: 200, message: 'ok' };
  }
}
