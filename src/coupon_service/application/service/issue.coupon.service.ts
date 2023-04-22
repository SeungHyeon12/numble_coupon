import { Injectable } from '@nestjs/common';
import { IssueCouponUseCase } from '../port/in/issue.coupon.uscase';
import { IssueCouponCommand } from '../dto/issue.coupon.command';

@Injectable()
export class IssueCouponService implements IssueCouponUseCase {
  //todo outport<db> 연결 설정
  async issueCoupon(command: IssueCouponCommand): Promise<any> {}
}
