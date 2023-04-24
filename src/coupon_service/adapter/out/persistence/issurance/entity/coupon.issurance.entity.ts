import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CouponIssuerModel } from './coupon.issuer.entity';
import { CouopnModel } from '../../coupon/entity/coupon.entity';
import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';

@Entity({ name: 'coupon_issurance' })
export class CouponIssuranceModel {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  couponIssuedStartDate: Date;

  @Column()
  couponIssuedEndDate: Date;

  @Column()
  issuranceCount: number;

  @Column()
  issueValidatedDate: Date;

  @Column()
  isUsedCoupon: boolean;

  @Column()
  couponUuid: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => CouponIssuerModel, (issuer) => issuer.issuerId)
  couponIssuer: CouponIssuerModel;

  @ManyToOne(() => CouopnModel, (coupon) => coupon.couponId)
  coupon: Coupon;
}
