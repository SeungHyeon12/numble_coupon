import { CouponUuid } from './vo/coupon.uuid';

export class CouponAggregate {
  // coupon 의 id
  private readonly couponId: string;

  // coupon 의 노출 식별자 uuid(vo)
  private readonly couponUuid: CouponUuid;

  // coupon 의 discount 관련 (vo)
  private readonly couponDiscountInfo: any;

  // coupon 의 사용가능 여부 (vo)
  private isCouponAvailable: any;

  // coupon 의 현재 발급된 순번
  private couponCount: number;

  private createdAt: Date;

  private updatedAt: Date;

  private deletedAt: Date;
}
