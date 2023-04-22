import uuidGenerator from 'src/common/function/uuid.generate.function';

export class CouponUuid {
  uuid: string;

  constructor(uuid: string | null) {
    this.uuid = uuid;
    if (!uuid) this.uuid = uuidGenerator();
  }
}
