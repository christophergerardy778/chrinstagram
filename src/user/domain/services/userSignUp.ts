import { injectable } from 'inversify';
import { UserCreator } from '../../application/create/userCreator';
import { PasswordHashing } from '../../../shared/domain/passwordHashing';
import { UserPassword } from '../valueObject/userPassword';
import { ProfileUsername } from '../../../profile/domain/valueObject/profileUsername';
import { UserEmail } from '../valueObject/UserEmail';
import { ProfileName } from '../../../profile/domain/valueObject/profileName';
import { User } from '../user';
import { UserId } from '../valueObject/userId';
import { ProfileCreator } from '../../../profile/application/create/profileCreator';
import { Profile } from '../../../profile/domain/profile';
import { ProfileId } from '../../../profile/domain/valueObject/profileId';

@injectable()
export class UserSignUp {
  constructor(
    private readonly userCreator: UserCreator,
    private readonly profileCreator: ProfileCreator,
    private readonly passwordHashing: PasswordHashing,
  ) {
  }

  public async run(
    userId: UserId,
    profileId: ProfileId,
    name: ProfileName,
    username: ProfileUsername,
    email: UserEmail,
    password: UserPassword,
  ): Promise<void> {
    const hashedPassword = await this.hashPassword(password);

    const user = User.create(userId, email, hashedPassword);
    const profile = Profile.withBasicData(profileId, name, username, user);

    await this.userCreator.run(user);
    await this.profileCreator.run(profile);
  }

  private async hashPassword(password: UserPassword): Promise<UserPassword> {
    const hashedPassword = await this.passwordHashing.hash(password.value);
    return UserPassword.create(hashedPassword);
  }
}
