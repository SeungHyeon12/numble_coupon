import { Uuid } from 'src/common/domain/vo/uuid';

export class IssuerUuid extends Uuid {
  constructor(uuid: string) {
    super(uuid);
  }
}
