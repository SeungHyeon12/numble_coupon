import { IssuranceStoreOutPort } from '../port/out/issurance.store.outport ';
import { Inject, Injectable } from '@nestjs/common';
import { deleteIssuranceUsecase } from '../port/in/usecase/delete.issurance.usecase';
import { DeleteIssuranceCommand } from '../dto/command/delete.issurance.command';

@Injectable()
export class DeleteIssuranceService implements deleteIssuranceUsecase {
  constructor(
    @Inject('ISSURANCE_STORE_OUTPORT')
    private readonly issuranceStoreAdaptor: IssuranceStoreOutPort,
  ) {}

  async deleteIssurance(command: DeleteIssuranceCommand): Promise<void> {
    await this.issuranceStoreAdaptor.deleteByIssuerUuidAndCouonUuid(
      command.issuerUuid,
      command.couponUuid,
    );
  }
}
