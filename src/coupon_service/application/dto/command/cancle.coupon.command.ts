import { NotAcceptableException } from '@nestjs/common';
import isNull from 'src/common/function/is.null.function';

export class CancleCouponCommand {
  issuerUuid: string;
  couponUuid: string;

  constructor(inputData: ICancleCouponCommandConstructor) {
    this.validateRequiredInputData(inputData);
    this.issuerUuid = inputData.issuerUuid;
    this.couponUuid = inputData.couopnUuid;
  }

  private validateRequiredInputData(
    inputData: ICancleCouponCommandConstructor,
  ) {
    if (isNull(inputData.issuerUuid))
      throw new NotAcceptableException(
        '취소하려는 하려는 쿠폰의 IssuerUuid 값이 빠져있습니다',
      );
    if (isNull(inputData.couopnUuid))
      throw new NotAcceptableException(
        '취소하려는 하려는 쿠폰의 couponUuid 값이 빠져있습니다',
      );
  }
}

export type ICancleCouponCommandConstructor = {
  issuerUuid: string;
  couopnUuid: string;
};
