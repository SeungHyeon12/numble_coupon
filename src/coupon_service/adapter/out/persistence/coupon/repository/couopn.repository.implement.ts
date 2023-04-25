import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';
import { ICouponRepository } from './coupon.repository';
import { DataSource } from 'typeorm';
import { Inject } from '@nestjs/common';
import { CouponModel } from '../entity/coupon.entity';

export class CouponRepository implements ICouponRepository {
  constructor(
    @Inject('DATA_SOURCE')
    private readonly dataSource: DataSource,
  ) {}

  create(coupon: Coupon): void {
    const properties = coupon.getProperties();
    this.dataSource
      .createQueryBuilder()
      .insert()
      .into(CouponModel)
      .values({
        couponUuid: properties.couponUuid,
        couponInformation: { ...properties.couponInformation },
      })
      .execute();
  }

  async getByCouponUuid(couponUuid: string) {
    const coupon = await this.dataSource
      .createQueryBuilder()
      .select('couopn')
      .from(CouponModel, 'coupon')
      .where('coupon.couponUuid = :couponUuid', {
        couponUuid,
      })
      .getOne();

    return null;
  }

  update(coupon: Coupon): void {
    const properties = coupon.getProperties();
    this.dataSource
      .createQueryBuilder()
      .update<CouponModel>(CouponModel)
      .set({
        couponInformation: properties.couponInformation,
      })
      .where('couponUuid = :couonUuid', { couponUuid: properties.couponUuid })
      .execute();
  }
}
