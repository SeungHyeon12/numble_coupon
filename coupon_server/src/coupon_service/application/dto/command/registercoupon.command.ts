import { GrpcInvalidArgumentException } from 'nestjs-grpc-exceptions';
import isCorrectDate from 'src/common/function/is.correct.date.function';
import isNull from 'src/common/function/is.null.function';
import {
  DISCOUNT_TYPE,
  changNumberToEnumString,
} from 'src/coupon_service/domain/coupon.issurance/vo/discount.type';

export class RegisterCouponCommand {
  discountType: DISCOUNT_TYPE;
  discountValue: number;
  couponActiveStartDate: Date;
  couponActiveEndDate: Date;
  issueLimit: number;

  constructor(inputData: ICreateCouponCommandConstructor) {
    this.validateInputData(inputData);
    this.issueLimit = inputData.issueLimit;
    this.discountType = changNumberToEnumString(inputData.discountType);
    this.discountValue = inputData.discountValue;
    this.couponActiveStartDate = new Date(inputData.couponActiveStartDate);
    this.couponActiveEndDate = new Date(inputData.couponActiveEndDate);
  }

  private validateInputData(inputData: ICreateCouponCommandConstructor) {
    if (isNull(inputData.issueLimit))
      throw new GrpcInvalidArgumentException(
        'coupon의 issueLimit에 대한 값이 빠져있습니다',
      );
    if (isNull(inputData.discountType))
      throw new GrpcInvalidArgumentException(
        'coupon의 discountType에 대한 값이 빠져있습니다',
      );
    if (isNull(inputData.discountValue))
      throw new GrpcInvalidArgumentException(
        'coupon의 discountValue에 대한 값이 빠져있습니다',
      );
    if (isNull(inputData.couponActiveStartDate))
      throw new GrpcInvalidArgumentException(
        'coupon의 couponActiveStartDate에 대한 값이 빠져있습니다',
      );
    if (!isCorrectDate(inputData.couponActiveStartDate))
      throw new GrpcInvalidArgumentException(
        'couponActiveStartDate 의 date 형식이 잘못되어있습니다',
      );
    if (isNull(inputData.couponActiveEndDate))
      throw new GrpcInvalidArgumentException(
        'coupon의 couponActiveEndDate에 대한 값이 빠져있습니다',
      );
    if (!isCorrectDate(inputData.couponActiveEndDate))
      throw new GrpcInvalidArgumentException(
        'couponActiveEndDate 의 date 형식이 잘못되어있습니다',
      );
  }
}

export type ICreateCouponCommandConstructor = {
  discountType: number;
  discountValue: number;
  couponActiveStartDate: Date;
  couponActiveEndDate: Date;
  issueLimit: number;
};
