import { GetCouponsCommand } from 'src/coupon_service/application/dto/command/get.coupons.command';
import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';

export interface GetIssurancesQuery {
  getCoupons(command: GetCouponsCommand): Promise<Coupon>;
}
