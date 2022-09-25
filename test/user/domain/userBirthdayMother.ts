import { faker } from '@faker-js/faker';
import { UserBirthday } from '../../../src/user/domain/valueObject/userBirthday';

export class UserBirthdayMother {
  public static create(value: string): UserBirthday {
    return new UserBirthday(value);
  }

  public static random() {
    return new UserBirthday(faker.date.birthdate({
      min: 16,
      max: 50,
    }).toISOString());
  }
}
