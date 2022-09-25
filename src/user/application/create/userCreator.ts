import { injectable } from 'inversify';
import { AllUsers } from '../../domain/allUsers';
import { User } from '../../domain/user';
import { UserEmail } from '../../domain/valueObject/userEmail';
import { EmailAlreadyTaken } from '../../domain/exception/emailAlreadyTaken';
import { UserByEmailSearcher } from '../search/userByEmailSearcher';

@injectable()
export class UserCreator {
  constructor(
    private readonly allUsers: AllUsers,
    private readonly userByEmailSearcher: UserByEmailSearcher,
  ) {
  }

  public async run(user: User): Promise<void> {
    await this.checkIfEmailAlreadyTaken(user.email);
    await this.allUsers.save(user);
  }

  private async checkIfEmailAlreadyTaken(email: UserEmail) {
    const emailAlreadyTaken = await this.userByEmailSearcher.run(email);

    if (emailAlreadyTaken) {
      throw new EmailAlreadyTaken();
    }
  }
}
