import { productUuid } from './vo/product.uuid';
import { UserUuid } from './vo/user.uuid';

export class CouponIssuer {
  issuerId: number;
  // coupon 을 발행한 유저의 Uuid
  issuerUuid: UserUuid;
  // 쿠폰을 사용한 물건의 Uuid
  productUuid: productUuid;

  constructor(userConstructorData: ICouponUserConstructor) {
    this.issuerId = userConstructorData.userId;
    this.issuerUuid = new UserUuid(userConstructorData.userUuid);
    this.productUuid = new productUuid(userConstructorData.productUuid);
  }

  public static createCouponUser(userUuid: string) {
    return new CouponIssuer({
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
