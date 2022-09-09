import { faker } from '@faker-js/faker';
import { UserPassword } from '../../../src/user/domain/valueObject/userPassword';

export class UserPasswordMother {
  public static create(password: string) {
    return new UserPassword(password);
  }

  public static random() {
    return new UserPassword(faker.internet.password(6));
  }
}
