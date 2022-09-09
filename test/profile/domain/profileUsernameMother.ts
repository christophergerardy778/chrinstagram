import { faker } from '@faker-js/faker';
import { ProfileUsername } from '../../../src/profile/domain/valueObject/profileUsername';

export class ProfileUsernameMother {
  public static random() {
    return new ProfileUsername(faker.internet.userName());
  }

  public static create(username: string) {
    return new ProfileUsername(username);
  }
}
