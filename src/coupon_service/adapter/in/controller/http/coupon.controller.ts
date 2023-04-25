import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CouponServiceDtoMapper } from './dto/request/coupon.service.dto.mapper';
import { RegisterCouponUseCase } from 'src/coupon_service/application/port/in/usecase/register.coupon.uscase';
import { RegisterCouponRequest } from './dto/request/reigster.coupon.request';

@Controller('/coupon')
export class CouponController {
  constructor(
    @Inject('REGISTER_COUPON_USECASE')
    private readonly registerCouopnService: RegisterCouponUseCase,
    private readonly couponServiceMapper: CouponServiceDtoMapper,
  ) {}

  @Post()
  async registerCouopn(@Body() registerCouponRequest: RegisterCouponRequest) {
    await this.registerCouopnService.registerCoupon(
      this.couponServiceMapper.toRegisterCommand(registerCouponRequest),
    );
  }
}
