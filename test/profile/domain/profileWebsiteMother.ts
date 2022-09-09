import { faker } from '@faker-js/faker';
import { ProfileWebsite } from '../../../src/profile/domain/valueObject/profileWebsite';

export class ProfileWebsiteMother {
  public static random() {
    return new ProfileWebsite(faker.internet.domainName());
  }
}
