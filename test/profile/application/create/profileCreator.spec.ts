import { mock } from 'jest-mock-extended';
import { ProfileMother } from '../../domain/profileMother';
import { AllProfiles } from '../../../../src/profile/domain/allProfiles';
import { ProfileCreator } from '../../../../src/profile/application/create/profileCreator';
import { ProfileSearcher } from '../../../../src/profile/application/search/profileSearcher';
import { UsernameAlreadyTaken } from '../../../../src/profile/domain/exceptions/UsernameAlreadyTaken';

const givenProfile = ProfileMother.random();
const allProfiles = mock<AllProfiles>();
const profileSearcher = new ProfileSearcher(allProfiles);
const profileCreator = new ProfileCreator(allProfiles, profileSearcher);

describe('Profile Creator', () => {
  beforeEach(() => {
    allProfiles.searchByCriteria.mockReset();
  });

  it('Lanzar una excepción si encuentra un perfil con el mismo nombre de usuario', async () => {
    allProfiles.searchByCriteria.mockReturnValue(Promise.resolve(givenProfile));
    await expect(profileCreator.run(givenProfile)).rejects.toThrowError(UsernameAlreadyTaken);
  });

  it('Guardar un usuario llamando al repositorio de profile', async () => {
    const searcher = jest.spyOn(profileSearcher, 'run');
    await expect(profileCreator.run(givenProfile)).resolves.not.toThrowError();
    expect(allProfiles.searchByCriteria).toBeCalled();
    expect(searcher).toBeCalledWith(givenProfile.username);
  });
});
