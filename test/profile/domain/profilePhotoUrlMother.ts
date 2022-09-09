import { ProfilePhotoUrl } from '../../../src/profile/domain/valueObject/profilePhotoUrl';
import { Profile } from '../../../src/profile/domain/profile';

export class ProfilePhotoUrlMother {
  public static default() {
    return new ProfilePhotoUrl(Profile.PROFILE_DEFAULT_PHOTO_URL);
  }
}
