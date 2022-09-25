import { faker } from '@faker-js/faker';
import { Gender } from '../../../src/user/domain/gender';
import { UserGender } from '../../../src/user/domain/valueObject/userGender';

export class UserGenderMother {
  public static create(gender: Gender) {
    return new UserGender(gender);
  }

  public static male() {
    return new UserGender(Gender.MALE);
  }

  public static female() {
    return new UserGender(Gender.FEMALE);
  }

  public static other() {
    return new UserGender(Gender.OTHER);
  }

  public static random() {
    return new UserGender(faker.datatype.number({
      min: 0,
      max: 2,
    }));
  }
}
