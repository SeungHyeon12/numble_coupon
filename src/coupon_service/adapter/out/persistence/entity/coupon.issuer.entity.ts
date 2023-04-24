import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CouponIssuranceModel } from './coupon.issurance.entity';

@Entity({ name: 'issuer' })
export class CouponIssuerModel {
  @PrimaryGeneratedColumn('increment')
  issuerId: number;

  @Column()
  issuerUuid: string;

  @Column({ nullable: true })
  productUuid: string;

  @OneToOne(() => CouponIssuranceModel, (issurance) => issurance.id)
  couponIssuer: CouponIssuranceModel;
}
