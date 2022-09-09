import { UserPrimitive } from '../../user/domain/userPrimitive';

export interface ProfilePrimitive {
  id: string;
  name: string;
  username: string;
  biography: string;
  photoUrl: string;
  website: string;
  isPrivate: boolean;
  user: UserPrimitive;
}
