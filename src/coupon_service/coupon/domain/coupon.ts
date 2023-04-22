import { UserUuid } from 'src/coupon_service/coupon.user/domain/vo/user.uuid';
import { CouponValidity } from './coupon.validity.entity';
import { CouponDiscountInfo } from './vo/coupon.disount.info';
import { CouponUuid } from './vo/coupon.uuid';
import { CouponIssueDate } from 'src/coupon_service/coupon/domain/vo/coupon.issue.date';

export class Coupon {
  // coupon 의 id
  private readonly couponId: number;

  // coupon 의 노출 식별자 uuid(vo)
  private readonly couponUuid: CouponUuid;

  // coupon 의 discount 관련 (vo)
  private readonly couponDiscountInfo: CouponDiscountInfo;

  // coupon 의 유효성에 대한 조건을 가지고 있는 validity(entity)
  private readonly couponValidity: CouponValidity;

  // coupon 을 실제로 발행한 날짜
  private readonly couponIssueDate: CouponIssueDate;

  //현재타입의 쿠폰을 지니고 있는 사람 <id 참조>
  private readonly userUuid: UserUuid;

  constructor(couponConstructorData: CouponConstructorInput) {
    this.couponId = couponConstructorData.couponId;
    this.couponUuid = new CouponUuid(couponConstructorData.couponUuid);
    this.couponDiscountInfo = new CouponDiscountInfo(
      couponConstructorData.discountType,
      couponConstructorData.discountValue,
    );
    this.couponValidity = new CouponValidity(
      couponConstructorData.couponActiveStartDate,
      couponConstructorData.couponActiveEndDate,
      couponConstructorData.issueLimit,
    );
    const { couponIssuedStartDate, couponIssuedEndDate } =
      couponConstructorData;
    this.couponIssueDate = new CouponIssueDate(
      couponIssuedStartDate,
      couponIssuedEndDate,
    );
  }
}

type CouponConstructorInput = {
  couponId: number;
  couponUuid: string;
  discountType: DISCOUNT_TYPE;
  discountValue: number;
  couponActiveStartDate: Date;
  couponActiveEndDate: Date;
  couponIssuedStartDate: Date;
  couponIssuedEndDate: Date;
  issueLimit: number;
};
