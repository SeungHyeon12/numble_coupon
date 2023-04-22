import { CouponUser } from './coupon.user.entity';
import { CouponDiscountInfo } from './vo/coupon/coupon.disount.info';
import { CouponIssueDate } from './vo/coupon/coupon.issue.date';
import { CouponUuid } from './vo/coupon/coupon.uuid';
import { CouponValidity } from './vo/coupon/coupon.validity';

export class CouponAggregate {
  // coupon 의 id
  private readonly couponId: number;

  // coupon 의 노출 식별자 uuid(vo)
  private readonly couponUuid: CouponUuid;

  // coupon 의 discount 관련 (vo)
  private readonly couponDiscountInfo: CouponDiscountInfo;

  // coupon 의 유효성에 대한 조건을 가지고 있는 validity(vo)
  private readonly couponValidity: CouponValidity;

  // coupon 을 실제로 발행한 날짜
  private readonly couponIssueDate: CouponIssueDate;

  //현재타입의 쿠폰을 발행한 사용자
  private readonly couponUser: CouponUser;

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
    this.couponUser = CouponUser.createCouponUser(
      couponConstructorData.userUuid,
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
  userUuid: string;
};
