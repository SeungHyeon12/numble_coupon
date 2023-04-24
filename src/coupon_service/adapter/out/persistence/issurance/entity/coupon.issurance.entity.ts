import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CouponIssuerModel } from './coupon.issuer.entity';

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

  @OneToOne(() => CouponIssuerModel, (issuer) => issuer.issuerId)
  @JoinColumn()
  couponIssuer: CouponIssuerModel;
}
