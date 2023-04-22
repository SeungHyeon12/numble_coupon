import { Uuid } from 'src/common/domain/vo/uuid';
import uuidGenerator from 'src/common/function/uuid.generate.function';

export class CouponUuid extends Uuid {
  constructor(uuid: string | null) {
    if (!uuid) {
      super(uuidGenerator());
    } else {
      super(uuid);
    }
  }
}
