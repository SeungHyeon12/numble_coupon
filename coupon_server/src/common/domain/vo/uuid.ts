export class Uuid {
  uuid: string;

  constructor(uuid: string) {
    this.uuid = uuid;
  }

  getValue() {
    return this.uuid;
  }
}
