import { CouponIssurance } from 'src/coupon_service/domain/coupon.issurance/coupon.issurance.entity';
import { IIssuranceRepository } from './issurance.repository';
import { DataSource } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { CouponIssuranceModel } from '../entity/coupon.issurance.entity';
import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';
import { CouponModel } from '../../coupon/entity/coupon.entity';
import { CouponIssuerModel } from '../entity/coupon.issuer.entity';
import { GrpcNotFoundException } from 'nestjs-grpc-exceptions';

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
    if (!couponModel) throw new GrpcNotFoundException('해당 쿠폰이 없습니다');

    const issuerModel = await this.dataSource
      .createQueryBuilder(CouponIssuerModel, 'issuer')
      .select('issuer')
      .where('issuer.issuerUuid = :issuerUuid', {
        issuerUuid: issurance.getProperties().couponIssuer.issuerUuid,
      })
      .getOne();

    await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(CouponIssuranceModel)
      .values({ ...rest, coupon: couponModel, couponIssuer: issuerModel })
      .execute();
  }

  async createIssuer(issuerUuid: string) {
    const issuer = await this.dataSource
      .createQueryBuilder(CouponIssuerModel, 'issuer')
      .select('issuer')
      .where('issuer.issuerUuid = :issuerUuid', {
        issuerUuid,
      })
      .getOne();
    if (issuer) return;

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
  ) {
    const issurance = await this.dataSource
      .createQueryBuilder(CouponIssuranceModel, 'issurance')
      .select('issurance')
      .leftJoinAndSelect('issurance.couponIssuer', 'issuer')
      .where('issuer.issuerUuid = :issuerUuid', { issuerUuid })
      .andWhere('issurance.couponUuid = :couponUuid', { couponUuid })
      .getOne();
    if (!issurance) return null;
    return issurance.toEntity();
  }

  async update(issurance: CouponIssurance): Promise<void> {
    const { issuranceId, ...properties } = issurance.getProperties();
    this.dataSource
      .createQueryBuilder()
      .update(CouponIssuranceModel)
      .set({ ...properties })
      .where('id = :id', { id: issurance.getProperties().issuranceId })
      .execute();
  }

  async deleteByIssuerUuidAndCouonUuid(issuerUuid: string, couponUuid: string) {
    const issue = await this.dataSource
      .createQueryBuilder(CouponIssuranceModel, 'issurance')
      .select('issurance')
      .leftJoinAndSelect('issurance.couponIssuer', 'issuer')
      .where('issuer.issuerUuid = :issuerUuid', { issuerUuid })
      .andWhere('issurance.couponUuid = :couponUuid', { couponUuid })
      .getOne();

    this.dataSource
      .createQueryBuilder(CouponIssuranceModel, 'issue')
      .softDelete()
      .where('id = :id', { id: issue.id })
      .execute();
  }

  async getCouponsByIssuerUuidAndRequestDate(
    issuerUuid: string,
    requestDate: Date,
    take: number,
    skip: number,
  ): Promise<Coupon[]> {
    const issurances = await this.dataSource
      .createQueryBuilder(CouponIssuranceModel, 'issue')
      .leftJoinAndSelect('issue.coupon', 'coupon')
      .leftJoinAndSelect('issue.couponIssuer', 'user')
      .where('user.issuerUuid = :issuerUuid', { issuerUuid })
      .andWhere('issue.issueValidatedDate > :requestDate', { requestDate })
      .take(take)
      .skip(skip)
      .getMany();
    const coupons = issurances.map((issurance) => issurance.coupon.toEntity());

    return coupons;
  }

  async getIssuranceByCouponUuid(couponUuid: string) {
    const issurance = await this.dataSource
      .createQueryBuilder(CouponIssuranceModel, 'issue')
      .leftJoinAndSelect('issue.couponIssuer', 'user')
      .where('issue.couponUuid = :couponUuid', { couponUuid })
      .orderBy('issue.id', 'DESC')
      .getOne();

    if (!issurance) return null;
    return issurance.toEntity();
  }
}
