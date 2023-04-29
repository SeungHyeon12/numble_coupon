import { DISCOUNT_TYPE } from 'src/coupon_service/domain/coupon.issurance/vo/discount.type';
import { Column } from 'typeorm';

export class CouponInformationEmbededModel {
  @Column()
  couponActiveStartDate: Date;

  @Column()
  couponActiveEndDate: Date;

  @Column({
    type: 'enum',
    enum: DISCOUNT_TYPE,
  })
  discountType: DISCOUNT_TYPE;

  @Column()
  discountValue: number;

  @Column()
  issueLimit: number;
}
