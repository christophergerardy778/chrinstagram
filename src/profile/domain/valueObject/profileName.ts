import { StringValueObject } from '../../../shared/domain/valueObject/stringValueObject';

export class ProfileName extends StringValueObject {
  constructor(name: string) {
    super(name);
  }
}
