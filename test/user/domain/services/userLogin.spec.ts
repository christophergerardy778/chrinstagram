import 'reflect-metadata';
import { mock } from 'jest-mock-extended';
import { UserMother } from '../userMother';
import { UserLogin } from '../../../../src/user/domain/services/userLogin';
import { UserByEmailFinder } from '../../../../src/user/application/find/userByEmailFinder';
import { AllUsers } from '../../../../src/user/domain/allUsers';
import { PasswordHash } from '../../../../src/shared/infrastructure/passwordHash';
import { JsonWebToken } from '../../../../src/shared/infrastructure/jsonWebToken';
import { UserPassword } from '../../../../src/user/domain/valueObject/userPassword';
import { Gender } from '../../../../src/user/domain/gender';

const allUsers = mock<AllUsers>();
const jwt = new JsonWebToken();
const passwordHash = new PasswordHash();

const userByEmailFinder = new UserByEmailFinder(allUsers);
const userLogin = new UserLogin(userByEmailFinder, passwordHash, jwt);

const givenUserToLogin = UserMother.toLogin(Gender.MALE, 'christopher778');
const userAlreadyRegister = UserMother.copy(givenUserToLogin);

describe('Login de usuario', () => {
  beforeAll(async () => {
    const hashedPassword = await passwordHash.hash(userAlreadyRegister.password!.value);
    userAlreadyRegister.password = new UserPassword(hashedPassword);
  });

  it('Regresar un JWT si las credenciales de usuario son correctas', async () => {
    allUsers.searchByCriteria.mockReturnValue(Promise.resolve(userAlreadyRegister));
    const token = await userLogin.run(givenUserToLogin.email, givenUserToLogin.password!);
    expect(jwt.verify(token)).toBeTruthy();
  });
});
