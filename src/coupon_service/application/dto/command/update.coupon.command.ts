import { NotAcceptableException } from '@nestjs/common';
import isNull from 'src/common/function/is.null.function';
import { DISCOUNT_TYPE } from 'src/coupon_service/domain/coupon.issurance/vo/discount.type';
import { IRegisterCouponInput } from 'src/coupon_service/domain/coupon/coupon.entity';

export class UpdateCouponCommand {
  couponUuid: string;
  discountType?: DISCOUNT_TYPE;
  discountValue?: number;
  couponActiveStartDate?: Date;
  couponActiveEndDate?: Date;
  issueLimit?: number;

  constructor(inputData: IUpdateCouponCommandConstructor) {
    this.validateRequiredInputData(inputData.couponUuid);
    Object.assign(this, inputData);
  }
  private validateRequiredInputData(couponUuid: string) {
    if (isNull(couponUuid))
      throw new NotAcceptableException(
        '업데이트 하려는 쿠폰의 uuid 값이 빠져있습니다',
      );
  }
}

type IUpdateCouponCommandConstructor = Partial<IRegisterCouponInput> & {
  couponUuid: string;
};
