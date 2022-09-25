import { StringValueObject } from '../../../shared/domain/valueObject/stringValueObject';
import { InvalidParam } from '../../../shared/domain/exception/invalidParam';

export class UserEmail extends StringValueObject {
  constructor(email: string) {
    if (!UserEmail.isValidEmail(email)) {
      throw new InvalidParam(email, UserEmail.name);
    }

    super(email);
  }

  private static isValidEmail(email: string) {
    const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailPattern.test(email);
  }
}
