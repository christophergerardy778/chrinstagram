import { Profile } from '../../../src/profile/domain/profile';
import { ProfileIdMother } from './profileIdMother';
import { ProfileNameMother } from './profileNameMother';
import { ProfileUsernameMother } from './profileUsernameMother';
import { ProfileBiographyMother } from './profileBiographyMother';
import { ProfilePhotoUrlMother } from './profilePhotoUrlMother';
import { ProfileWebsiteMother } from './profileWebsiteMother';
import { ProfileIsPrivateMother } from './ProfileIsPrivateMother';
import { UserMother } from '../../user/domain/userMother';

export class ProfileMother {
  public static random() {
    return Profile.create(
      ProfileIdMother.create(),
      ProfileNameMother.random(),
      ProfileUsernameMother.random(),
      ProfileBiographyMother.random(),
      ProfilePhotoUrlMother.default(),
      ProfileWebsiteMother.random(),
      ProfileIsPrivateMother.random(),
      UserMother.random(),
    );
  }
}
