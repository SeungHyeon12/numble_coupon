import { GetCouponsQuery } from '../port/in/query/get.coupons.query';
import { GetCouponsCommand } from '../dto/command/get.coupons.command';

export class GetCouponsService implements GetCouponsQuery {
  async getCoupons(command: GetCouponsCommand) {
    return null;
  }
}
