import { NotAcceptableException } from '@nestjs/common';
import isNull from 'src/common/function/is.null.function';

export class IssueCouponCommand {
  couonUuid: string;
  issueLimit: number;
  couponIssuedStartDate: Date;
  couponIssuedEndDate: Date;
  issuerUuid: string;

  constructor(inpuData: IIssueCouopnCommandConstructor) {
    this.validateInputData(inpuData);
    this.couonUuid = inpuData.couponUuid;
    this.issueLimit = inpuData.issueLimit;
    this.couponIssuedStartDate = inpuData.couponIssuedStartDate;
    this.couponIssuedEndDate = inpuData.couponIssuedEndDate;
    this.issuerUuid = inpuData.issuerUuid;
  }

  private validateInputData(inputData: IIssueCouopnCommandConstructor) {
    if (isNull(inputData.couponUuid))
      throw new NotAcceptableException(
        'coupon의 issueLimit에 대한 값이 빠져있습니다',
      );
    if (isNull(inputData.issueLimit))
      throw new NotAcceptableException(
        'coupon의 discountType에 대한 값이 빠져있습니다',
      );
    if (isNull(inputData.couponIssuedStartDate))
      throw new NotAcceptableException(
        'coupon의 discountValue에 대한 값이 빠져있습니다',
      );
    if (isNull(inputData.couponIssuedEndDate))
      throw new NotAcceptableException(
        'coupon의 couponActiveStartDate에 대한 값이 빠져있습니다',
      );
    if (isNull(inputData.issuerUuid))
      throw new NotAcceptableException(
        'coupon의 couponActiveEndDate에 대한 값이 빠져있습니다',
      );
  }
}

type IIssueCouopnCommandConstructor = {
  couponUuid: string;
  issueLimit: number;
  couponIssuedStartDate: Date;
  couponIssuedEndDate: Date;
  issuerUuid: string;
};
