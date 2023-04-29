import { GrpcInvalidArgumentException } from 'nestjs-grpc-exceptions';
import isCorrectDate from 'src/common/function/is.correct.date.function';
import isNull from 'src/common/function/is.null.function';

export class IssueCouponCommand {
  couponUuid: string;
  couponIssuedStartDate: Date;
  issuerUuid: string;

  constructor(inpuData: IIssueCouponCommandConstructor) {
    this.validateInputData(inpuData);
    this.couponUuid = inpuData.couponUuid;
    this.couponIssuedStartDate = new Date(inpuData.couponIssuedStartDate);
    this.issuerUuid = inpuData.issuerUuid;
  }

  private validateInputData(inputData: IIssueCouponCommandConstructor) {
    if (isNull(inputData.couponUuid))
      throw new GrpcInvalidArgumentException(
        'issue하려는 couonUuid에 대한 값이 빠져있습니다',
      );
    if (isNull(inputData.couponIssuedStartDate))
      throw new GrpcInvalidArgumentException(
        'issue하려는couponIssuedStartDate에 대한 값이 빠져있습니다',
      );
    if (!isCorrectDate(inputData.couponIssuedStartDate))
      throw new GrpcInvalidArgumentException(
        'couponIssuedStartDate 의 date 형식이 잘못되어있습니다',
      );
    if (isNull(inputData.issuerUuid))
      throw new GrpcInvalidArgumentException(
        'issue하려는 issuerUuid에 대한 값이 빠져있습니다',
      );
  }
}

export type IIssueCouponCommandConstructor = {
  couponUuid: string;
  couponIssuedStartDate: Date;
  issuerUuid: string;
};
