import { Injectable } from '@nestjs/common';
import { IssueCouponUseCase } from '../port/in/issue.coupon.uscase';
import { IssueCouponCommand } from '../dto/issue.coupon.command';
import { CouponDomainService } from 'src/coupon_service/domain/service/coupon.domain.service';

@Injectable()
export class IssueCouponService implements IssueCouponUseCase {
  //todo outport<db> 연결 설정
  constructor(private readonly couponService: CouponDomainService) {}

  async issueCoupon(command: IssueCouponCommand) {}
}
