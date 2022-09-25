import 'reflect-metadata';
import { mock } from 'jest-mock-extended';
import { UserByEmailFinder } from '../../../../src/user/application/find/userByEmailFinder';
import { AllUsers } from '../../../../src/user/domain/allUsers';
import { EmailNotFound } from '../../../../src/user/domain/exception/emailNotFound';
import { UserMother } from '../../domain/userMother';

const givenUserWithEmailNotExist = UserMother.random();
const givenUserAlreadyRegister = UserMother.random();

const allUsers = mock<AllUsers>();
const userByEmailFinder = new UserByEmailFinder(allUsers);

describe('Encontrar usuario por email', () => {
  beforeEach(() => {
    allUsers.searchByCriteria.mockReset();
  });

  it('Regresar un usuario al encontrarlo por su email ', async () => {
    allUsers.searchByCriteria.mockReturnValue(Promise.resolve(givenUserAlreadyRegister));

    await expect(
      userByEmailFinder.run(givenUserAlreadyRegister.email),
    ).resolves.toBe(givenUserAlreadyRegister);
  });

  it('Lanzar una excepción si no encuentra un usuario con el email dado', async () => {
    allUsers.searchByCriteria.mockReturnValue(Promise.resolve(null));

    await expect(
      userByEmailFinder.run(givenUserWithEmailNotExist.email),
    ).rejects.toThrow(EmailNotFound);
  });
});
