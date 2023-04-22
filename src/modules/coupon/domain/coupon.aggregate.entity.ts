import { BaseDomainEntity } from 'src/common/base.domain.entity';
import { CouponValidity } from './coupon.validity.entity';
import { CouponDiscountInfo } from './vo/coupon.disount.info';
import { CouponUuid } from './vo/coupon.uuid';

export class CouponAggregate extends BaseDomainEntity {
  // coupon 의 id
  private readonly couponId: string;

  // coupon 의 노출 식별자 uuid(vo)
  private readonly couponUuid: CouponUuid;

  // coupon 의 discount 관련 (vo)
  private readonly couponDiscountInfo: CouponDiscountInfo;

  // coupon 의 유효성에 대한 조건을 가지고 있는 validity(entity)
  private readonly couponValidity: CouponValidity;

  // coupon 의 사용가능 여부 (vo)
  private isCouponAvailable: boolean;

  // coupon 의 현재 발급된 순번
  private couponCount: number;
}
