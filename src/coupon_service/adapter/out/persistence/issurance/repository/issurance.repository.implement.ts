import { CouponIssurance } from 'src/coupon_service/domain/coupon.issurance/coupon.issurance.entity';
import { IIssuranceRepository } from './issurance.repository';
import { DataSource } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { CouponIssuranceModel } from '../entity/coupon.issurance.entity';
import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';
import { CouponModel } from '../../coupon/entity/coupon.entity';
import { CouponIssuerModel } from '../entity/coupon.issuer.entity';

@Injectable()
export class IssuranceRepository implements IIssuranceRepository {
  constructor(
    @Inject('DATA_SOURCE')
    private readonly dataSource: DataSource,
  ) {}
  async create(issurance: CouponIssurance): Promise<void> {
    const { issuranceId, ...rest } = issurance.getProperties();
    const couponModel = await this.dataSource
      .createQueryBuilder(CouponModel, 'coupon')
      .select('coupon')
      .where('coupon.couponUuid = :couponUuid', {
        couponUuid: issurance.getCouponUuid().getValue(),
      })
      .getOne();

    const issuerModel = await this.dataSource
      .createQueryBuilder(CouponIssuerModel, 'issuer')
      .select('issuer')
      .where('issuer.issuerUuid = :issuerUuid', {
        issuerUuid: issurance.getProperties().couponIssuer.issuerUuid,
      })
      .getOne();

    this.dataSource
      .createQueryBuilder()
      .insert()
      .into(CouponIssuranceModel)
      .values({ ...rest, coupon: couponModel, couponIssuer: issuerModel })
      .execute();
  }

  async createIssuer(issuerUuid: string) {
    await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(CouponIssuerModel)
      .values({ issuerUuid })
      .execute();
  }

  async getIssuranceByIssuerUuidAndCouponUuid(
    issuerUuid: string,
    couponUuid: string,
  ): Promise<CouponIssurance> {
    const issurance = await this.dataSource
      .createQueryBuilder(CouponIssuranceModel, 'issurance')
      .select('issurance')
      .innerJoinAndSelect('issurance.couponIssuer', 'issuer')
      .where('issuer.issuerUuid = :issuerUuid', { issuerUuid })
      .andWhere('issurance.couponUuid = :couponUuid', { couponUuid })
      .getOne();

    return null;
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
      .createQueryBuilder(CouponIssuranceModel, 'issuer')
      .softDelete()
      .where('issuer.issuerUuid = :issuerUuid', { issuerUuid })
      .andWhere('couponUuid = :couponUuid', { couponUuid })
      .execute();
  }

  async getCouponsByIssuerUuid(
    issuerUuid: string,
    requestDate: Date,
    take: number,
    skip: number,
  ): Promise<Coupon[]> {
    await this.dataSource
      .createQueryBuilder('coupon_issurance', 'i')
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
