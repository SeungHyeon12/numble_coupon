import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CouponIssuerModel } from './coupon.issuer.entity';
import { CouponModel } from '../../coupon/entity/coupon.entity';
import { CouponIssurance } from 'src/coupon_service/domain/coupon.issurance/coupon.issurance.entity';

@Entity({ name: 'coupon_issurance' })
export class CouponIssuranceModel {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  couponIssuedStartDate: Date;

  @Column()
  couponIssuedEndDate: Date;

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

  @Column({ nullable: true })
  productUuid: string;

  @ManyToOne(() => CouponIssuerModel, (issuer) => issuer.issuerId)
  couponIssuer: CouponIssuerModel;

  @ManyToOne(() => CouponModel, (coupon) => coupon.couponId)
  coupon: CouponModel;

  public toEntity() {
    return new CouponIssurance({
      issuranceId: this.id,
      isUsedCoupon: this.isUsedCoupon,
      couponIssuedStartDate: this.couponIssuedStartDate,
      couponIssuedEndDate: this.couponIssuedEndDate,
      issuerId: this.couponIssuer.issuerId,
      issuerUuid: this.couponIssuer.issuerUuid,
      productUuid: this.productUuid,
      couponUuid: this.couponUuid,
      issueValidatedDate: this.issueValidatedDate,
    });
  }
}
