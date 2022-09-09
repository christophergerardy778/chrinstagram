import { UuidValueObject } from '../../../shared/domain/valueObject/uuidValueObject';

export class ProfileId extends UuidValueObject {
  constructor(value: string) {
    super(value);
  }
}
