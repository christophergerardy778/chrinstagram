import 'reflect-metadata';
import { mock } from 'jest-mock-extended';
import { UserMother } from '../userMother';
import { UserSignUp } from '../../../../src/user/domain/services/userSignUp';
import { UserCreator } from '../../../../src/user/application/create/userCreator';
import { PasswordHash } from '../../../../src/shared/infrastructure/passwordHash';
import { ProfileMother } from '../../../profile/domain/profileMother';
import { AllProfiles } from '../../../../src/profile/domain/repository/allProfiles';
import { AllUsers } from '../../../../src/user/domain/allUsers';
import { UserByEmailSearcher } from '../../../../src/user/application/search/userByEmailSearcher';
import { ProfileCreator } from '../../../../src/profile/application/create/profileCreator';
import { ProfileSearcher } from '../../../../src/profile/application/search/profileSearcher';

const givenUser = UserMother.random();
const givenProfile = ProfileMother.random();

const allUsers = mock<AllUsers>();
const allProfiles = mock<AllProfiles>();

const passwordHash = new PasswordHash();

const userByEmailSearcher = new UserByEmailSearcher(allUsers);
const userCreator = new UserCreator(allUsers, userByEmailSearcher);
const profileSearcher = new ProfileSearcher(allProfiles);
const profileCreator = new ProfileCreator(allProfiles, profileSearcher);

const registerUser = new UserSignUp(userCreator, profileCreator, passwordHash);

const registerUserResult = () => registerUser.run(
  givenUser.id,
  givenProfile.id,
  givenProfile.name,
  givenProfile.username,
  givenUser.gender,
  givenUser.email,
  givenUser.password!,
);

describe('Registro de usuarios', () => {
  it('Crear un usuario con un nombre, email, usuario y contraseña', async () => {
    allProfiles.searchByCriteria.mockReturnValue(Promise.resolve(null));
    await expect(registerUserResult()).resolves.not.toThrowError();
  });
});
