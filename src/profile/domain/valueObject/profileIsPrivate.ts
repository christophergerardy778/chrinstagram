import { BooleanValueObject } from '../../../shared/domain/valueObject/booleanValueObject';

export class ProfileIsPrivate extends BooleanValueObject {
  constructor(value: boolean) {
    super(value);
  }
}
