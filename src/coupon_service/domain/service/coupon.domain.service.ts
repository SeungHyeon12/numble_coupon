import { CouponIssurance } from '../coupon.issurance.entity';

export class CouponDomainService {
  isCouponExceedLimit(
    couponIssueLimit: number,
    couponIssurances: CouponIssurance[] | null,
  ) {
    if (!couponIssurances) return false;
    if (couponIssurances.length < couponIssueLimit) return false;
    return true;
  }
}
