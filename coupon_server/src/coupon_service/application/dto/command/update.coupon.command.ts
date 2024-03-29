import { GrpcInvalidArgumentException } from 'nestjs-grpc-exceptions';
import isCorrectDate from 'src/common/function/is.correct.date.function';
import isNull from 'src/common/function/is.null.function';
import {
  DISCOUNT_TYPE,
  changNumberToEnumString,
} from 'src/coupon_service/domain/coupon.issurance/vo/discount.type';
import { IRegisterCouponInput } from 'src/coupon_service/domain/coupon/coupon.entity';
import { ICreateCouponCommandConstructor } from './registercoupon.command';

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
    const { couponActiveStartDate, couponActiveEndDate } = inputData;
    this.setDate(couponActiveStartDate, couponActiveEndDate);
    this.setDisCountType(inputData?.discountType);
  }

  private setDate(couponActiveStartDate: Date, couponActiveEndDate: Date) {
    if (!isNull(couponActiveStartDate))
      this.couponActiveStartDate = new Date(couponActiveStartDate);
    if (!isNull(couponActiveEndDate))
      this.couponActiveEndDate = new Date(couponActiveEndDate);
  }

  private setDisCountType(discountType: number) {
    if (!isNull(discountType))
      this.discountType = changNumberToEnumString(discountType);
  }

  private validateRequiredInputData(
    inputData: IUpdateCouponCommandConstructor,
  ) {
    if (isNull(inputData.couponUuid))
      throw new GrpcInvalidArgumentException(
        '업데이트 하려는 쿠폰의 uuid 값이 빠져있습니다',
      );
    if (!isNull(inputData.couponActiveStartDate)) {
      if (!isCorrectDate(inputData.couponActiveStartDate))
        throw new GrpcInvalidArgumentException(
          'couponActiveStartDate 의 date 형식이 잘못되어있습니다',
        );
    }
    if (!isNull(inputData.couponActiveEndDate)) {
      if (!isCorrectDate(inputData.couponActiveEndDate))
        throw new GrpcInvalidArgumentException(
          'couponActiveEndDate 의 date 형식이 잘못되어있습니다',
        );
    }
  }
}

type IUpdateCouponCommandConstructor =
  Partial<ICreateCouponCommandConstructor> & {
    couponUuid: string;
  };
