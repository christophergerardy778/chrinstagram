import { User } from '../../../src/user/domain/user';
import { UserId } from '../../../src/user/domain/valueObject/userId';
import { UserPassword } from '../../../src/user/domain/valueObject/userPassword';
import { UserIdMother } from './userIdMother';
import { UserEmailMother } from './userEmailMother';
import { UserPasswordMother } from './userPasswordMother';
import { UserEmail } from '../../../src/user/domain/valueObject/UserEmail';

export class UserMother {
  public static random() {
    return User.create(
      UserIdMother.create(),
      UserEmailMother.random(),
      UserPasswordMother.random(),
    );
  }

  public static create(
    id: UserId,
    email: UserEmail,
    password: UserPassword,
  ): User {
    return User.create(
      id,
      email,
      password,
    );
  }
}
