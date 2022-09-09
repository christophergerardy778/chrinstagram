import { StringValueObject } from '../../../shared/domain/valueObject/stringValueObject';

export class ProfileUsername extends StringValueObject {
  constructor(value: string) {
    super(value);
  }
}
