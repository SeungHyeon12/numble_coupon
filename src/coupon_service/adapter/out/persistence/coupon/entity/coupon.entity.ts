import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CouponInformationEmbededModel } from './coupon.informaiton.embeded.entity';

@Entity({ name: 'coupon' })
export class CouopnModel {
  @PrimaryGeneratedColumn('increment')
  couponId: number;

  @Column()
  couponUuid: string;

  @Column(() => CouponInformationEmbededModel, { prefix: false })
  couponInformation: CouponInformationEmbededModel;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
