import { productUuid } from './vo/product.uuid';
import { UserUuid } from './vo/user.uuid';

export class CouponUser {
  userId: number;
  // coupon 을 발행한 유저의 Uuid
  userUuid: UserUuid;
  // 쿠폰을 사용한 물건의 Uuid
  productId: productUuid;

  constructor(userConstructorData: ICouponUserConstructor) {
    this.userId = userConstructorData.userId;
    this.userUuid = new UserUuid(userConstructorData.userUuid);
  }
}

type ICouponUserConstructor = {
  userId: number;
  userUuid: string;
  productId: string;
};
