import { CouponIssuer } from "./coupon.issuer.entity";
import { CouponUuid } from "../coupon/vo/coupon.uuid";
import { CouponIssueDate } from "./vo/coupon.issue.date";
import { ProductUuid } from "./vo/product.uuid";
import { GrpcUnavailableException } from "nestjs-grpc-exceptions";

export class CouponIssurance {
  private readonly issuranceId: number;
  private couponIssuer: CouponIssuer;
  private readonly couponIssueDate: CouponIssueDate;
  private issueValidatedDate: Date;
  private isUsedCoupon: boolean;
  private couponUuid: CouponUuid;
  // 쿠폰을 사용한 물건의 Uuid
  private productUuid: ProductUuid;
  private issueCount: number;

  constructor(issueData: ICouponIssuranceConstructor) {
    this.issuranceId = issueData.issuranceId;
    this.couponIssuer = new CouponIssuer({
      issuerId: issueData.issuerId,
      issuerUuid: issueData.issuerUuid,
    });
    this.productUuid = new ProductUuid(issueData.productUuid);
    this.issueValidatedDate = issueData.issueValidatedDate;
    this.couponIssueDate = new CouponIssueDate(
      issueData.couponIssuedStartDate,
      issueData.couponIssuedEndDate
    );
    this.isUsedCoupon = issueData.isUsedCoupon;
    this.couponUuid = new CouponUuid(issueData.couponUuid);
    this.issueCount = issueData.issueCount;
  }
  public getProperties() {
    return {
      issuranceId: this.issuranceId,
      couponIssuedStartDate: this.couponIssueDate.getcouponIssuedStartDate(),
      couponIssuedEndDate: this.couponIssueDate.getcouponIssuedEndDate(),
      issueValidatedDate: this.issueValidatedDate,
      isUsedCoupon: this.isUsedCoupon,
      couponUuid: this.couponUuid.getValue(),
      productUuid: this.productUuid.getValue(),
      couponIssuer: this.couponIssuer.getProperties(),
      issueCount: this.issueCount,
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

  public getCount() {
    return this.issueCount;
  }

  public useCoupon(productUuid: string) {
    this.productUuid = new ProductUuid(productUuid);
    this.isUsedCoupon = true;
  }

  public checkAlreadyUseCoupon() {
    if (this.isUsedCoupon)
      throw new GrpcUnavailableException("이미 사용된 쿠폰입니다");
  }

  public cancleCoupon() {
    this.productUuid = new ProductUuid(null);
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
  issueCount: number;
};

export type IIssueCouponInput = Omit<
  ICouponIssuranceConstructor,
  | "issuranceId"
  | "issuranceCount"
  | "issuerId"
  | "productUuid"
  | "isUsedCoupon"
  | "couponIssuedEndDate"
  | "issueValidatedDate"
>;
