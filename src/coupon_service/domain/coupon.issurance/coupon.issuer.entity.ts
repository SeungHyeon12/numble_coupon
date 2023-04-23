import { productUuid } from './vo/product.uuid';
import { UserUuid } from './vo/user.uuid';

export class CouponIssuer {
  issuerId: number;
  // coupon 을 발행한 유저의 Uuid
  issuerUuid: UserUuid;
  // 쿠폰을 사용한 물건의 Uuid
  productUuid: productUuid;

  constructor(userConstructorData: ICouponUserConstructor) {
    this.issuerId = userConstructorData.issuerId;
    this.issuerUuid = new UserUuid(userConstructorData.issuerUuid);
    this.productUuid = new productUuid(userConstructorData.productUuid);
  }
}

type ICouponUserConstructor = {
  issuerId: number;
  issuerUuid: string;
  productUuid: string;
};
