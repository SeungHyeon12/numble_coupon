import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';
import { ICouponRepository } from './coupon.repository';
import { DataSource } from 'typeorm';
import { Inject } from '@nestjs/common';
import { CouopnModel } from '../entity/coupon.entity';

export class CouponRepository implements ICouponRepository {
  constructor(
    @Inject('DATA_SOURCE')
    private readonly dataSource: DataSource,
  ) {}

  save(coupon: Coupon): void {
    const properties = coupon.getProperties();
    this.dataSource.createQueryBuilder().insert().into(CouopnModel).values({
      couponUuid: properties.couponUuid,
      couponInformation: properties.couponInformation,
    });
  }
}
