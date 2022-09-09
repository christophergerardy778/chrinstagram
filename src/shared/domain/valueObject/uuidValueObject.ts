import { validate, version } from 'uuid';
import { InvalidUUID } from '../exception/invalidUUID';

export class UuidValueObject {
  private readonly UUID_ALLOWED_VERSION = 4;

  public value!: string;

  protected constructor(value: string) {
    this.validateUUID(value);
    this.value = value;
  }

  private validateUUID(value: string) {
    if (!validate(value) || version(value) !== this.UUID_ALLOWED_VERSION) {
      throw new InvalidUUID();
    }
  }
}
