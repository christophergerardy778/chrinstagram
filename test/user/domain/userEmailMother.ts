import { faker } from '@faker-js/faker';
import { UserEmail } from '../../../src/user/domain/valueObject/UserEmail';

export class UserEmailMother {
  public static create(email: string): UserEmail {
    return new UserEmail(email);
  }

  public static random() {
    return new UserEmail(faker.internet.email());
  }
}
