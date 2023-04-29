import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CouponInformationEmbededModel } from './coupon.informaiton.embeded.entity';
import { Coupon } from 'src/coupon_service/domain/coupon/coupon.entity';

@Entity({ name: 'coupon' })
export class CouponModel {
  @PrimaryGeneratedColumn('increment')
  couponId: number;

  @Column()
  couponUuid: string;

  @Column(() => CouponInformationEmbededModel, { prefix: false })
  couponInformation: CouponInformationEmbededModel;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  toEntity() {
    return new Coupon({
      couponId: this.couponId,
      couponUuid: this.couponUuid,
      discountType: this.couponInformation.discountType,
      discountValue: this.couponInformation.discountValue,
      couponActiveStartDate: this.couponInformation.couponActiveStartDate,
      couponActiveEndDate: this.couponInformation.couponActiveEndDate,
      issueLimit: this.couponInformation.issueLimit,
    });
  }
}
