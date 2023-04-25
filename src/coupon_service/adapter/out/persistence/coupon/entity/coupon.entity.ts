import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CouponInformationEmbededModel } from './coupon.informaiton.embeded.entity';

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
}
