import { Uuid } from 'src/common/domain/vo/uuid';

export class ProductUuid extends Uuid {
  constructor(uuid: string) {
    super(uuid);
  }
}
