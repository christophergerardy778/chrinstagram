import { ProfileUsername } from '../valueObject/profileUsername';
import { Profile } from '../profile';

export interface AllPublicProfiles {
  withUsername(userName: ProfileUsername): Promise<Profile | null>;
}
