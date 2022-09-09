import { injectable } from 'inversify';
import { AllProfiles } from '../../domain/allProfiles';
import { Profile } from '../../domain/profile';
import { ProfileUsername } from '../../domain/valueObject/profileUsername';
import { UsernameAlreadyTaken } from '../../domain/exceptions/UsernameAlreadyTaken';
import { ProfileSearcher } from '../search/profileSearcher';

@injectable()
export class ProfileCreator {
  constructor(
    private readonly allProfiles: AllProfiles,
    private readonly profileSearcher: ProfileSearcher,
  ) {
  }

  public async run(profile: Profile): Promise<void> {
    await this.checkIfUsernameAlreadyTaken(profile.username);
    await this.allProfiles.save(profile);
  }

  private async checkIfUsernameAlreadyTaken(username: ProfileUsername) {
    const userNameAlreadyTaken = await this.profileSearcher.run(username);

    if (userNameAlreadyTaken) {
      throw new UsernameAlreadyTaken();
    }
  }
}
