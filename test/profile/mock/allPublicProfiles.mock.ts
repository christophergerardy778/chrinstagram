import { mock } from 'jest-mock-extended';
import { AllPublicProfiles } from '../../../src/profile/domain/repository/allPublicProfiles';
import { ProfileUsername } from '../../../src/profile/domain/valueObject/profileUsername';
import { ProfileMother } from '../domain/profileMother';

const allPublicProfiles = mock<AllPublicProfiles>();
const profileExisting = ProfileMother.random();

allPublicProfiles.withUsername.mockImplementation(async (userName: ProfileUsername) => {
  if (profileExisting.username.value === userName.value) {
    return profileExisting;
  }

  return null;
});

export {
  allPublicProfiles,
  profileExisting,
};
