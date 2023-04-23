import { CouponIssuer } from './coupon.issuer.entity';
import { CouponUuid } from '../coupon/vo/coupon.uuid';
import { CouponIssueDate } from './vo/coupon.issue.date';

export class CouponIssurance {
  private readonly issuranceId: number;
  private couponIssuer: CouponIssuer;
  private readonly couponIssueDate: CouponIssueDate;
  private issuranceCount: number;
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
    this.couponIssueDate = new CouponIssueDate(
      issueData.couponIssuedStartDate,
      issueData.couponIssuedStartDate,
    );
    this.couponUuid = new CouponUuid(issueData.couponUuid);
  }

  public useCoupon(productUuid: string) {
    const issuerProperties = this.couponIssuer.getProperties();
    this.couponIssuer = new CouponIssuer({ ...issuerProperties, productUuid });
    this.isUsedCoupon = true;
  }

  public updateIssuranceCount(nextCount: number) {
    this.issuranceCount = nextCount;
  }

  public confirmIssueValidateDate(calculatedValidateDate: Date) {
    this.issueValidatedDate = calculatedValidateDate;
  }

  public getIssueValidatedDate() {
    return this.issueValidatedDate;
  }

  public getissuranceCount() {
    return this.issuranceCount;
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
      issuranceCount: null,
      issuerId: null,
      productUuid: null,
      isUsedCoupon: false,
    });
  }
}

export type ICouponIssuranceConstructor = {
  issuranceId: number;
  issueLimit: number;
  issuranceCount: number;
  isUsedCoupon: boolean;

  couponIssuedStartDate: Date;
  couponIssuedEndDate: Date;

  issuerId: number;
  issuerUuid: string;
  productUuid: string;

  couponUuid: string;
};

export type IIssueCouponInput = Omit<
  ICouponIssuranceConstructor,
  'issuranceId' | 'issuranceCount' | 'issuerId' | 'productUuid' | 'isUsedCoupon'
>;
