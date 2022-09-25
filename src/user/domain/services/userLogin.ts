import { UserByEmailFinder } from '../../application/find/userByEmailFinder';
import { UserEmail } from '../valueObject/userEmail';
import { UserPassword } from '../valueObject/userPassword';
import { PasswordHashing } from '../../../shared/domain/passwordHashing';
import { BadUserCredentials } from '../exception/badUserCredentials';
import { Jwt } from '../../../shared/domain/jwt';
import { UserId } from '../valueObject/userId';

export class UserLogin {
  constructor(
    private readonly userByEmailFinder: UserByEmailFinder,
    private readonly passwordHashing: PasswordHashing,
    private readonly jwt: Jwt,
  ) {
  }

  public async run(email: UserEmail, password: UserPassword) {
    const user = await this.userByEmailFinder.run(email);
    await this.isPasswordCorrect(password, user.password!);
    return this.generateToken(user.id);
  }

  private async isPasswordCorrect(password: UserPassword, hash: UserPassword) {
    const passwordMatch = await this.passwordHashing.compare(password.value, hash.value);

    if (!passwordMatch) {
      throw new BadUserCredentials();
    }
  }

  private async generateToken(userId: UserId) {
    return this.jwt.generate({
      id: userId.value,
    });
  }
}
