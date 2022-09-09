import { Entity } from 'typeorm';
import { UserId } from './valueObject/userId';
import { UserPrimitive } from './userPrimitive';
import { UserPassword } from './valueObject/userPassword';
import { UserEmail } from './valueObject/UserEmail';

@Entity()
export class User {
  private constructor(
    public id: UserId,
    public email: UserEmail,
    public password: UserPassword,
  ) {
  }

  public static create(
    id: UserId,
    email: UserEmail,
    password: UserPassword,
  ): User {
    return new this(id, email, password);
  }

  static fromPrimitives(userPrimitive: UserPrimitive): User {
    return User.create(
      new UserId(userPrimitive.id),
      new UserEmail(userPrimitive.email),
      new UserPassword(userPrimitive.password),
    );
  }

  toPrimitives(): UserPrimitive {
    return {
      id: this.id.value,
      email: this.email.value,
      password: this.password.value,
    };
  }
}
