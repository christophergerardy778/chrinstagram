import 'reflect-metadata';
import { mock } from 'jest-mock-extended';
import { UserMother } from '../userMother';
import { UserSignUp } from '../../../../src/user/domain/services/userSignUp';
import { UserCreator } from '../../../../src/user/application/create/userCreator';
import { PasswordHash } from '../../../../src/shared/infrastructure/PasswordHash';
import { ProfileMother } from '../../../profile/domain/profileMother';
import { AllProfiles } from '../../../../src/profile/domain/allProfiles';
import { AllUsers } from '../../../../src/user/domain/allUsers';
import { UserByEmailSearcher } from '../../../../src/user/application/search/userByEmailSearcher';
import { ProfileCreator } from '../../../../src/profile/application/create/profileCreator';
import { ProfileSearcher } from '../../../../src/profile/application/search/profileSearcher';

const givenUser = UserMother.random();
const givenProfile = ProfileMother.random();
const allUsers = mock<AllUsers>();
const allProfiles = mock<AllProfiles>();

const registerUser = new UserSignUp(
  new UserCreator(allUsers, new UserByEmailSearcher(allUsers)),
  new ProfileCreator(allProfiles, new ProfileSearcher(allProfiles)),
  new PasswordHash(),
);

const registerUserResult = () => registerUser.run(
  givenUser.id,
  givenProfile.id,
  givenProfile.name,
  givenProfile.username,
  givenUser.email,
  givenUser.password,
);

describe('Registro de usuarios', () => {
  it('Crear un usuario con un nombre, email, usuario y contraseña', async () => {
    allProfiles.searchByCriteria.mockReturnValue(Promise.resolve(null));

    await expect(registerUserResult()).resolves.not.toThrowError();
    expect(allUsers.searchByCriteria).toBeCalled();
    expect(allProfiles.searchByCriteria).toBeCalled();
  });
});
