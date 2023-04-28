import { NotAcceptableException } from '@nestjs/common';
import isNull from 'src/common/function/is.null.function';

export class IssueCouponCommand {
  couonUuid: string;
  couponIssuedStartDate: Date;
  issuerUuid: string;

  constructor(inpuData: IIssueCouponCommandConstructor) {
    this.validateInputData(inpuData);
    this.couonUuid = inpuData.couponUuid;
    this.couponIssuedStartDate = inpuData.couponIssuedStartDate;
    this.issuerUuid = inpuData.issuerUuid;
  }

  private validateInputData(inputData: IIssueCouponCommandConstructor) {
    if (isNull(inputData.couponUuid))
      throw new NotAcceptableException(
        'coupon의 issueLimit에 대한 값이 빠져있습니다',
      );
    if (isNull(inputData.couponIssuedStartDate))
      throw new NotAcceptableException(
        'coupon의 discountValue에 대한 값이 빠져있습니다',
      );
    if (isNull(inputData.issuerUuid))
      throw new NotAcceptableException(
        'coupon의 couponActiveEndDate에 대한 값이 빠져있습니다',
      );
  }
}

export type IIssueCouponCommandConstructor = {
  couponUuid: string;
  couponIssuedStartDate: Date;
  issuerUuid: string;
};
