import { IssuerUuid } from './vo/user.uuid';

export class CouponIssuer {
  issuerId: number;
  // coupon 을 발행한 유저의 Uuid
  issuerUuid: IssuerUuid;

  constructor(userConstructorData: ICouponUserConstructor) {
    this.issuerId = userConstructorData.issuerId;
    this.issuerUuid = new IssuerUuid(userConstructorData.issuerUuid);
  }

  getProperties() {
    return {
      issuerId: this.issuerId,
      issuerUuid: this.issuerUuid.getValue(),
    };
  }
}

type ICouponUserConstructor = {
  issuerId: number;
  issuerUuid: string;
};
