import { NotAcceptableException } from '@nestjs/common';
import isNull from 'src/common/function/is.null.function';

export class UseCouponCommand {
  couponUuid: string;
  issuerUuid: string;
  productUuid: string;
  useRequestDate: Date;

  constructor(inputData: IUseCouponCommandConstructor) {
    this.couponUuid = inputData.couponUuid;
    this.issuerUuid = inputData.issuerUuid;
    this.productUuid = inputData.productUuid;
    this.useRequestDate = inputData.useRequestDate;
  }

  private validateInputData(inputData: IUseCouponCommandConstructor) {
    if (isNull(inputData.couponUuid))
      throw new NotAcceptableException(
        'coupon의 couponUuid에 대한 값이 빠져있습니다',
      );
    if (isNull(inputData.issuerUuid))
      throw new NotAcceptableException(
        'coupon의 issuerUuid에 대한 값이 빠져있습니다',
      );
    if (isNull(inputData.productUuid))
      throw new NotAcceptableException(
        'coupon의 productUuid에 대한 값이 빠져있습니다',
      );
    if (isNull(inputData.useRequestDate))
      throw new NotAcceptableException(
        'coupon의 useRequestDate에 대한 값이 빠져있습니다',
      );
  }
}

type IUseCouponCommandConstructor = {
  couponUuid: string;
  issuerUuid: string;
  productUuid: string;
  useRequestDate: Date;
};
