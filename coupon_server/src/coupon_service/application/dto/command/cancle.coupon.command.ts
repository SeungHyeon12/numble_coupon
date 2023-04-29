import { GrpcInvalidArgumentException } from 'nestjs-grpc-exceptions';
import isNull from 'src/common/function/is.null.function';

export class CancleCouponCommand {
  issuerUuid: string;
  couponUuid: string;

  constructor(inputData: ICancleCouponCommandConstructor) {
    this.validateRequiredInputData(inputData);
    this.issuerUuid = inputData.issuerUuid;
    this.couponUuid = inputData.couponUuid;
  }

  private validateRequiredInputData(
    inputData: ICancleCouponCommandConstructor,
  ) {
    if (isNull(inputData.issuerUuid))
      throw new GrpcInvalidArgumentException(
        '취소하려는 하려는 쿠폰의 IssuerUuid 값이 빠져있습니다',
      );
    if (isNull(inputData.couponUuid))
      throw new GrpcInvalidArgumentException(
        '취소하려는 하려는 쿠폰의 couponUuid 값이 빠져있습니다',
      );
  }
}

export type ICancleCouponCommandConstructor = {
  issuerUuid: string;
  couponUuid: string;
};
