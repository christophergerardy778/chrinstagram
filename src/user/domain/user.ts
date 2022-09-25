import { UserId } from './valueObject/userId';
import { UserPrimitive } from './userPrimitive';
import { UserPassword } from './valueObject/userPassword';
import { UserEmail } from './valueObject/userEmail';
import { UserGender } from './valueObject/userGender';
import { UserBirthday } from './valueObject/userBirthday';

export class User {
  private constructor(
    public id: UserId,
    public email: UserEmail,
    public gender: UserGender,
    public birthday?: UserBirthday,
    public password?: UserPassword,
  ) {
  }

  public static create(
    id: UserId,
    email: UserEmail,
    gender: UserGender,
    birthday?: UserBirthday,
    password?: UserPassword,
  ): User {
    return new this(id, email, gender, birthday, password);
  }

  static fromPrimitives(userPrimitive: UserPrimitive): User {
    const { password, birthday } = userPrimitive;

    return User.create(
      new UserId(userPrimitive.id),
      new UserEmail(userPrimitive.email),
      new UserGender(userPrimitive.gender),
      birthday ? new UserBirthday(birthday) : undefined,
      password ? new UserPassword(password) : undefined,
    );
  }

  toPrimitives(): UserPrimitive {
    return {
      id: this.id.value,
      email: this.email.value,
      gender: this.gender.value,
      password: this.password?.value,
      birthday: this.birthday?.value,
    };
  }
}
