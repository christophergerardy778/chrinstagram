import { ProfileId } from './valueObject/profileId';
import { ProfileWebsite } from './valueObject/profileWebsite';
import { ProfileBiography } from './valueObject/profileBiography';
import { ProfileUsername } from './valueObject/profileUsername';
import { ProfilePhotoUrl } from './valueObject/profilePhotoUrl';
import { ProfileIsPrivate } from './valueObject/profileIsPrivate';
import { ProfilePrimitive } from './profilePrimitive';
import { User } from '../../user/domain/user';
import { ProfileName } from './valueObject/profileName';

export class Profile {
  public static readonly PROFILE_DEFAULT_PHOTO_URL = 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif';

  constructor(
    public id: ProfileId,
    public name: ProfileName,
    public username: ProfileUsername,
    public biography: ProfileBiography,
    public photoUrl: ProfilePhotoUrl,
    public website: ProfileWebsite,
    public isPrivate: ProfileIsPrivate,
    public user: User,
  ) {
  }

  public static create(
    id: ProfileId,
    name: ProfileName,
    username: ProfileUsername,
    biography: ProfileBiography,
    photoUrl: ProfilePhotoUrl,
    website: ProfileWebsite,
    isPrivate: ProfileIsPrivate,
    user: User,
  ): Profile {
    return new Profile(id, name, username, biography, photoUrl, website, isPrivate, user);
  }

  public static withBasicData(
    id: ProfileId,
    name: ProfileName,
    username: ProfileUsername,
    user: User,
  ) {
    return Profile.create(
      id,
      name,
      username,
      new ProfileBiography(''),
      new ProfilePhotoUrl(this.PROFILE_DEFAULT_PHOTO_URL),
      new ProfileWebsite(''),
      new ProfileIsPrivate(false),
      user,
    );
  }

  public static fromPrimitives({
    id,
    name,
    username,
    biography,
    photoUrl,
    website,
    isPrivate,
    user,
  }: ProfilePrimitive): Profile {
    return this.create(
      new ProfileId(id),
      new ProfileName(name),
      new ProfileUsername(username),
      new ProfileBiography(biography),
      new ProfilePhotoUrl(photoUrl),
      new ProfileWebsite(website),
      new ProfileIsPrivate(isPrivate),
      User.fromPrimitives(user),
    );
  }

  public hasBiography() {
    return this.biography.value.length !== 0;
  }

  public toPrimitives(): ProfilePrimitive {
    return {
      id: this.id.value,
      name: this.name.value,
      username: this.username.value,
      website: this.website.value,
      photoUrl: this.photoUrl.value,
      biography: this.biography.value,
      isPrivate: this.isPrivate.value,
      user: this.user.toPrimitives(),
    };
  }
}
