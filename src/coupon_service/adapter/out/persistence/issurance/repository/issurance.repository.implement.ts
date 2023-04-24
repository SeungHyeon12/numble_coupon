import { CouponIssurance } from 'src/coupon_service/domain/coupon.issurance/coupon.issurance.entity';
import { IIssuranceRepository } from './issurance.repository';
import { DataSource } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { CouponIssuranceModel } from '../entity/coupon.issurance.entity';

@Injectable()
export class IssuranceRepository implements IIssuranceRepository {
  constructor(
    @Inject('DATA_SOURCE')
    private readonly dataSource: DataSource,
  ) {}
  create(issurance: CouponIssurance): void {
    const { issuranceId, ...rest } = issurance.getProperties();
    this.dataSource
      .createQueryBuilder()
      .insert()
      .into(CouponIssuranceModel)
      .values({ ...rest })
      .execute();
  }

  update(issurance: CouponIssurance): void {
    const properties = issurance.getProperties();
    this.dataSource
      .createQueryBuilder()
      .insert()
      .into(CouponIssuranceModel)
      .values({ ...properties })
      .execute();
  }

  deleteByIssuerUuidAndCouonUuid(issuerUuid: string, couponUuid: string): void {
    this.dataSource
      .createQueryBuilder()
      .softDelete()
      .from(CouponIssuranceModel)
      .where('couopnIssuer.issuerUuid = :issuerUuid', { issuerUuid })
      .andWhere('couponUuid = :couopnUuid', { couponUuid })
      .execute();
  }
}
