import { BaseDomainEntity } from 'src/common/base.domain.entity';

export class CouponValidity extends BaseDomainEntity {
  // 쿠폰의 자체 시작 끝 일자(vo)
  private readonly couponActiveDate: any;

  //쿠폰의 갯수 발급 제한
  private inssuranceLimit: number;
}
