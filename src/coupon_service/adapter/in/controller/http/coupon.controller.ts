import {
  Body,
  Controller,
  Get,
  HttpCode,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CouponServiceDtoMapper } from './dto/coupon.service.dto.mapper';
import { RegisterCouponUseCase } from 'src/coupon_service/application/port/in/usecase/register.coupon.uscase';
import { RegisterCouponRequest } from './dto/request/reigster.coupon.request';
import { UpdateCouponRequest } from './dto/request/update.coupon.request';
import { UpdateCouponUseCase } from 'src/coupon_service/application/port/in/usecase/update.coupon.command';

@Controller('/coupon')
export class CouponController {
  constructor(
    @Inject('REGISTER_COUPON_USECASE')
    private readonly registerCouponService: RegisterCouponUseCase,
    @Inject('UPDATE_COUPON_USECASE')
    private readonly updateCouponService: UpdateCouponUseCase,
    private readonly couponServiceMapper: CouponServiceDtoMapper,
  ) {}

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
}
