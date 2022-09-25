import { allPublicProfiles, profileExisting } from '../../mock/allPublicProfiles.mock';
import { SearchProfileByUsername } from '../../../../src/profile/application/search/searchProfileByUsername';
import { ProfileMother } from '../../domain/profileMother';

const profileNotRegister = ProfileMother.random();
const searchProfileByUserName = new SearchProfileByUsername(allPublicProfiles);

describe('Encontrar un perfil por nombre de usuario', () => {
  it('Regresar el usuario si este existe en el repositorio', async () => {
    const profile = await searchProfileByUserName.run(profileExisting.username);
    expect(profile).not.toBeNull();
  });

  it('Regresar null si el usuario no existe en el repositorio', async () => {
    const profile = await searchProfileByUserName.run(profileNotRegister.username);
    expect(profile).toBeNull();
  });

  it('Regresar un usuario sin datos sensibles como la contraseña', async () => {
    const profile = await searchProfileByUserName.run(profileExisting.username);

    expect(profile).not.toContain({
      user: { password: expect.any(String) },
    });
  });
});
