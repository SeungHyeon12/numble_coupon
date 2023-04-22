import { Uuid } from 'src/common/domain/vo/uuid';

export class UserUuid extends Uuid {
  constructor(uuid: string) {
    super(uuid);
  }
}
