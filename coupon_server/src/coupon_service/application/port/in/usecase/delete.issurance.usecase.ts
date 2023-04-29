import { DeleteIssuranceCommand } from 'src/coupon_service/application/dto/command/delete.issurance.command';

export interface deleteIssuranceUsecase {
  deleteIssurance(command: DeleteIssuranceCommand): void;
}
