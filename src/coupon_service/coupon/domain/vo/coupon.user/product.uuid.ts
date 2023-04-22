import { Uuid } from 'src/common/domain/vo/uuid';

export class productUuid extends Uuid {
  constructor(uuid: string) {
    super(uuid);
  }
}
