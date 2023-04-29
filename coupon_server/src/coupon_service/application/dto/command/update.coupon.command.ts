import { GrpcInvalidArgumentException } from 'nestjs-grpc-exceptions';
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
    this.validateRequiredInputData(inputData);
    Object.assign(this, inputData);
  }
  private validateRequiredInputData(
    inputData: IUpdateCouponCommandConstructor,
  ) {
    if (isNull(inputData.couponUuid))
      throw new GrpcInvalidArgumentException(
        '업데이트 하려는 쿠폰의 uuid 값이 빠져있습니다',
      );
    if (!isNull(inputData.couponActiveStartDate)) {
      if (!(new Date(inputData.couponActiveStartDate) instanceof Date))
        throw new GrpcInvalidArgumentException(
          'couponActiveStartDate 의 date 형식이 잘못되어있습니다',
        );
    }
    if (!isNull(inputData.couponActiveEndDate)) {
      if (!(new Date(inputData.couponActiveEndDate) instanceof Date))
        throw new GrpcInvalidArgumentException(
          'couponActiveEndDate 의 date 형식이 잘못되어있습니다',
        );
    }
  }
}

type IUpdateCouponCommandConstructor = Partial<IRegisterCouponInput> & {
  couponUuid: string;
};
