import { CouponIssuer } from './coupon.issuer.entity';
import { CouponUuid } from '../coupon/vo/coupon.uuid';
import { CouponIssueDate } from './vo/coupon.issue.date';

export class CouponIssurance {
  private readonly issuranceId: number;
  private couponIssuer: CouponIssuer;
  private readonly couponIssueDate: CouponIssueDate;
  private issueValidatedDate: Date;
  private isUsedCoupon: boolean;
  private couponUuid: CouponUuid;

  constructor(issueData: ICouponIssuranceConstructor) {
    this.issuranceId = issueData.issuranceId;
    this.couponIssuer = new CouponIssuer({
      issuerId: issueData.issuerId,
      issuerUuid: issueData.issuerUuid,
      productUuid: issueData.productUuid,
    });
    this.issueValidatedDate = issueData.issueValidatedDate;
    this.couponIssueDate = new CouponIssueDate(
      issueData.couponIssuedStartDate,
      issueData.couponIssuedStartDate,
    );
    this.isUsedCoupon = issueData.isUsedCoupon;
    this.couponUuid = new CouponUuid(issueData.couponUuid);
  }
  public getProperties() {
    return {
      issuranceId: this.issuranceId,
      couponIssuedStartDate: this.couponIssueDate.getcouponIssuedStartDate(),
      couponIssuedEndDate: this.couponIssueDate.getcouponIssuedEndDate(),
      issueValidatedDate: this.issueValidatedDate,
      isUsedCoupon: this.isUsedCoupon,
      couponUuid: this.couponUuid.getValue(),
      couponIssuer: this.couponIssuer.getProperties(),
    };
  }

  public getCouponUuid() {
    return this.couponUuid;
  }

  public getIssuer() {
    return {
      couponIssuer: this.couponIssuer.getProperties(),
    };
  }

  public useCoupon(productUuid: string) {
    const issuerProperties = this.couponIssuer.getProperties();
    this.couponIssuer = new CouponIssuer({ ...issuerProperties, productUuid });
    this.isUsedCoupon = true;
  }

  public cancleCoupon() {
    const issuerProperties = this.couponIssuer.getProperties();
    this.couponIssuer = new CouponIssuer({
      ...issuerProperties,
      productUuid: null,
    });
    this.isUsedCoupon = false;
  }

  public confirmIssueValidateDate(calculatedValidateDate: Date) {
    this.issueValidatedDate = calculatedValidateDate;
  }

  public getIssueValidatedDate() {
    return this.issueValidatedDate;
  }

  public getIssueDate() {
    return {
      couponIssuedStartDate: this.couponIssueDate.getcouponIssuedStartDate(),
      couponIssuedEndDate: this.couponIssueDate.getcouponIssuedEndDate(),
    };
  }

  public static IssueCoupon(issueInputData: IIssueCouponInput) {
    return new CouponIssurance({
      ...issueInputData,
      issuranceId: null,
      issuerId: null,
      productUuid: null,
      isUsedCoupon: false,
      couponIssuedEndDate: null,
      issueValidatedDate: null,
    });
  }
}

export type ICouponIssuranceConstructor = {
  issuranceId: number;
  isUsedCoupon: boolean;

  couponIssuedStartDate: Date;
  couponIssuedEndDate: Date;
  issueValidatedDate: Date;

  issuerId: number;
  issuerUuid: string;
  productUuid: string;

  couponUuid: string;
};

export type IIssueCouponInput = Omit<
  ICouponIssuranceConstructor,
  | 'issuranceId'
  | 'issuranceCount'
  | 'issuerId'
  | 'productUuid'
  | 'isUsedCoupon'
  | 'couponIssuedEndDate'
  | 'issueValidatedDate'
>;
