import { productUuid } from './vo/product.uuid';
import { IssuerUuid } from './vo/user.uuid';

export class CouponIssuer {
  issuerId: number;
  // coupon 을 발행한 유저의 Uuid
  issuerUuid: IssuerUuid;
  // 쿠폰을 사용한 물건의 Uuid
  productUuid: productUuid;

  constructor(userConstructorData: ICouponUserConstructor) {
    this.issuerId = userConstructorData.issuerId;
    this.issuerUuid = new IssuerUuid(userConstructorData.issuerUuid);
    this.productUuid = new productUuid(userConstructorData.productUuid);
  }

  getProperties() {
    return {
      issuerId: this.issuerId,
      issuerUuid: this.issuerUuid.getValue(),
      productUuid: this.productUuid.getValue(),
    };
  }
}

type ICouponUserConstructor = {
  issuerId: number;
  issuerUuid: string;
  productUuid: string;
};
