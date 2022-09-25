import { AllPublicProfiles } from '../../domain/repository/allPublicProfiles';
import { ProfileUsername } from '../../domain/valueObject/profileUsername';

export class SearchProfileByUsername {
  constructor(private readonly allPublicProfiles: AllPublicProfiles) {
  }

  public async run(username: ProfileUsername) {
    return this.allPublicProfiles.withUsername(username);
  }
}
