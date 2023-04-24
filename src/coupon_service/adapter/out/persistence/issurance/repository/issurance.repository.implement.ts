import { CouponIssurance } from 'src/coupon_service/domain/coupon.issurance/coupon.issurance.entity';
import { IIssuranceRepository } from './issurance.repository';
import { DataSource } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { CouponIssuranceModel } from '../entity/coupon.issurance.entity';
import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';

@Injectable()
export class IssuranceRepository implements IIssuranceRepository {
  constructor(
    @Inject('DATA_SOURCE')
    private readonly dataSource: DataSource,
  ) {}
  async create(issurance: CouponIssurance): Promise<void> {
    const { issuranceId, ...rest } = issurance.getProperties();
    const couponModel = await this.dataSource
      .createQueryBuilder()
      .select('coupon')
      .from(Coupon, 'coupon')
      .where('couponUuid = :couopnUuid', {
        couponUuid: issurance.getCouoponUuid().getValue(),
      })
      .getOne();

    this.dataSource
      .createQueryBuilder()
      .insert()
      .into(CouponIssuranceModel)
      .values({ ...rest, coupon: couponModel })
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

  async getCouponsByIssuerUuid(
    issuerUuid: string,
    requestDate: Date,
    take: number,
    skip: number,
  ): Promise<Coupon[]> {
    await this.dataSource
      .createQueryBuilder('couopn_issurance', 'i')
      .innerJoin('i.couponIssuer', 'user')
      .innerJoin('i.coupon', 'coupon')
      .select('coupon')
      .where('user.issuerUuid = :issuerUuid', { issuerUuid })
      .andWhere('i.issueValidatedDate > :requestDate', { requestDate })
      .take(take)
      .skip(skip)
      .getMany();

    return null;
  }
}
