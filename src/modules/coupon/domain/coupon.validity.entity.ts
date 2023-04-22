import { BaseDomainEntity } from 'src/common/domain/base.domain.entity';
import { CouponActiveDate } from './vo/coupont.active.date';

export class CouponValidity extends BaseDomainEntity {
  // 쿠폰의 자체 시작 끝 일자(vo)
  private readonly couponActiveDate: CouponActiveDate;

  //쿠폰의 갯수 발급 제한
  private inssuranceLimit: number;
}
