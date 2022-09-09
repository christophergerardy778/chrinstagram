import 'reflect-metadata';
import { mock } from 'jest-mock-extended';
import { UserCreator } from '../../../../src/user/application/create/userCreator';
import { AllUsers } from '../../../../src/user/domain/allUsers';
import { UserByEmailSearcher } from '../../../../src/user/application/search/userByEmailSearcher';
import { UserMother } from '../../domain/userMother';
import { EmailAlreadyTaken } from '../../../../src/user/domain/exception/EmailAlreadyTaken';

const givenUser = UserMother.random();
const allUsers = mock<AllUsers>();
const userCreator = new UserCreator(allUsers, new UserByEmailSearcher(allUsers));

describe('User Creator', () => {
  beforeEach(() => {
    allUsers.searchByCriteria.mockReset();
  });

  it('Guardar un usuario llamando al repositorio', async () => {
    await expect(userCreator.run(givenUser)).resolves.not.toThrowError();
    expect(allUsers.save).toBeCalledWith(givenUser);
  });

  it('Lanzar una excepción si el email existe', async () => {
    allUsers.searchByCriteria.mockReturnValue(Promise.resolve(givenUser));
    await expect(userCreator.run(givenUser)).rejects.toThrowError(EmailAlreadyTaken);
  });
});
