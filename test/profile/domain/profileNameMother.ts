import { faker } from '@faker-js/faker';
import { ProfileName } from '../../../src/profile/domain/valueObject/profileName';

export class ProfileNameMother {
  public static random() {
    return new ProfileName(faker.name.findName());
  }
}
