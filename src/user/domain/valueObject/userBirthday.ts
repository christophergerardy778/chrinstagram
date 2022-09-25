import { StringValueObject } from '../../../shared/domain/valueObject/stringValueObject';
import { InvalidParam } from '../../../shared/domain/exception/invalidParam';
import { BirthdayValidator } from '../../../shared/domain/birthdayValidator';

export class UserBirthday extends StringValueObject {
  constructor(birthday: string) {
    if (!BirthdayValidator.isValid(birthday)) {
      throw new InvalidParam(birthday, UserBirthday.name);
    }

    super(birthday);
  }
}
