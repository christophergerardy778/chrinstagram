import { UuidValueObject } from '../../../shared/domain/valueObject/uuidValueObject';

export class UserId extends UuidValueObject {
  constructor(value: string) {
    super(value);
  }
}
