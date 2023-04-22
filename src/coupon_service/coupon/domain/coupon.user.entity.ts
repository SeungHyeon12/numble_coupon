import { productUuid } from './vo/coupon.user/product.uuid';
import { UserUuid } from './vo/coupon.user/user.uuid';

export class CouponUser {
  userId: number;
  // coupon 을 발행한 유저의 Uuid
  userUuid: UserUuid;
  // 쿠폰을 사용한 물건의 Uuid
  productUuid: productUuid;

  constructor(userConstructorData: ICouponUserConstructor) {
    this.userId = userConstructorData.userId;
    this.userUuid = new UserUuid(userConstructorData.userUuid);
    this.productUuid = new productUuid(userConstructorData.productUuid);
  }

  public static createCouponUser(userUuid: string) {
    return new CouponUser({
      userUuid,
      userId: null,
      productUuid: null,
    });
  }
}

type ICouponUserConstructor = {
  userId: number;
  userUuid: string;
  productUuid: string;
};
