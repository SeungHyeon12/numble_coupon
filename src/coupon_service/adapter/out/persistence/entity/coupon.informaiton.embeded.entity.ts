import { Column } from 'typeorm';

export class CouponInformationEmbededModel {
  @Column()
  couponActiveStartDate: Date;

  @Column()
  couoponActiveEndDate: Date;

  @Column({
    type: 'enum',
    enum: DISCOUNT_TYPE,
  })
  discountType: DISCOUNT_TYPE;

  @Column()
  discountValue: number;
}
