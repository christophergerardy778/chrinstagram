import { StringValueObject } from '../../../shared/domain/valueObject/stringValueObject';

export class ProfileWebsite extends StringValueObject {
  constructor(value: string) {
    super(value);
  }
}
