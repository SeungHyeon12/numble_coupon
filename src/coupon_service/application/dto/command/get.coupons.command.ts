import { NotAcceptableException } from '@nestjs/common';
import isNull from 'src/common/function/is.null.function';

export class GetCouponsCommand {
  issuerUuid: string;
  pageSize: number;
  pageOffset: number;

  constructor(inputData: IGetCouponsCommandConstructor) {
    this.issuerUuid = inputData.issuerUuid;
    this.pageSize = inputData.pageSize;
    this.pageOffset = inputData.pageOffset;
  }

  private validateRequiredInputData(inputData: IGetCouponsCommandConstructor) {
    if (isNull(inputData.issuerUuid))
      throw new NotAcceptableException('쿠폰의 issuerUuid 값이 빠져있습니다');
    if (isNull(inputData.pageSize))
      throw new NotAcceptableException('쿠폰의 pageSize 값이 빠져있습니다');
    if (isNull(inputData.pageOffset))
      throw new NotAcceptableException('쿠폰의 pageOffset 값이 빠져있습니다');
  }
}
type IGetCouponsCommandConstructor = {
  issuerUuid: string;
  pageSize: number;
  pageOffset: number;
};
