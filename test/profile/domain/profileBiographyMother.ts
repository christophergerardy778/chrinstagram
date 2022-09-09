import { faker } from '@faker-js/faker';
import { ProfileBiography } from '../../../src/profile/domain/valueObject/profileBiography';

export class ProfileBiographyMother {
  public static random() {
    return new ProfileBiography(faker.random.words(8));
  }
}
