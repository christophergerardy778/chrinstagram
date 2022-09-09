import 'reflect-metadata';
import { mock } from 'jest-mock-extended';
import { ProfileSearcher } from '../../../../src/profile/application/search/profileSearcher';
import { AllProfiles } from '../../../../src/profile/domain/allProfiles';
import { ProfileMother } from '../../domain/profileMother';
import { ProfileUsernameMother } from '../../domain/profileUsernameMother';

const givenUserName = ProfileUsernameMother.create('username');
const givenProfile = ProfileMother.random();
const allProfiles = mock<AllProfiles>();
const profileSearcher = new ProfileSearcher(allProfiles);

describe('Profile Searcher', () => {
  beforeEach(() => {
    allProfiles.searchByCriteria.mockReset();
  });

  it('Buscar un usuario por email si se encuentra', async () => {
    allProfiles.searchByCriteria.mockReturnValue(Promise.resolve(givenProfile));
    await expect(profileSearcher.run(givenProfile.username)).resolves.toEqual(givenProfile);
  });

  it('Debera regresar null si no existe un usuario con el username: christophergerardy778', async () => {
    allProfiles.searchByCriteria.mockReturnValue(Promise.resolve(null));
    await expect(profileSearcher.run(givenUserName)).resolves.toBe(null);
  });
});
