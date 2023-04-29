import { GrpcInvalidArgumentException } from 'nestjs-grpc-exceptions';
import isCorrectDate from 'src/common/function/is.correct.date.function';
import isNull from 'src/common/function/is.null.function';

export class GetCouponsCommand {
  issuerUuid: string;
  requestDate: Date;
  page: number;
  size: number;

  constructor(inputData: IGetCouponsCommandConstructor) {
    this.validateRequiredInputData(inputData);
    this.issuerUuid = inputData.issuerUuid;
    this.requestDate = inputData.requestDate;
    this.page = inputData.page;
    this.size = inputData.size;
  }

  private validateRequiredInputData(inputData: IGetCouponsCommandConstructor) {
    if (isNull(inputData.issuerUuid))
      throw new GrpcInvalidArgumentException(
        '쿠폰의 issuerUuid 값이 빠져있습니다',
      );
    if (isNull(inputData.requestDate))
      throw new GrpcInvalidArgumentException(
        '쿠폰의 requestDate 값이 빠져있습니다',
      );
    if (!isCorrectDate(inputData.requestDate))
      throw new GrpcInvalidArgumentException(
        'requestDate 의 date 형식이 잘못되어있습니다',
      );
    if (isNull(inputData.page))
      throw new GrpcInvalidArgumentException(
        '쿠폰의 pageSize 값이 빠져있습니다',
      );
    if (isNull(inputData.size))
      throw new GrpcInvalidArgumentException(
        '쿠폰의 pageOffset 값이 빠져있습니다',
      );
  }
}
type IGetCouponsCommandConstructor = {
  requestDate: Date;
  issuerUuid: string;
  page: number;
  size: number;
};
