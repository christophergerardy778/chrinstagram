import { User } from '../../../src/user/domain/user';
import { UserId } from '../../../src/user/domain/valueObject/userId';
import { UserPassword } from '../../../src/user/domain/valueObject/userPassword';
import { UserIdMother } from './userIdMother';
import { UserEmailMother } from './userEmailMother';
import { UserPasswordMother } from './userPasswordMother';
import { UserEmail } from '../../../src/user/domain/valueObject/userEmail';
import { UserBirthdayMother } from './userBirthdayMother';
import { UserGenderMother } from './userGenderMother';
import { Gender } from '../../../src/user/domain/gender';
import { UserGender } from '../../../src/user/domain/valueObject/userGender';
import { UserBirthday } from '../../../src/user/domain/valueObject/userBirthday';

export class UserMother {
  public static random() {
    return User.create(
      UserIdMother.create(),
      UserEmailMother.random(),
      UserGenderMother.random(),
      UserBirthdayMother.random(),
      UserPasswordMother.random(),
    );
  }

  public static toLogin(gender: Gender, password: string) {
    return User.create(
      UserIdMother.create(),
      UserEmailMother.random(),
      UserGenderMother.create(gender),
      undefined,
      UserPasswordMother.create(password),
    );
  }

  public static copy(user: User) {
    return User.create(
      user.id,
      user.email,
      user.gender,
      user.birthday,
      user.password,
    );
  }

  public static create(
    id: UserId,
    email: UserEmail,
    gender: UserGender,
    birthday?: UserBirthday,
    password?: UserPassword,
  ): User {
    return User.create(
      id,
      email,
      gender,
      birthday,
      password,
    );
  }
}
