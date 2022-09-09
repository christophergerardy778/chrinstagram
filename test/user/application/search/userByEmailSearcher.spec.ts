import { mock } from 'jest-mock-extended';
import { UserMother } from '../../domain/userMother';
import { AllUsers } from '../../../../src/user/domain/allUsers';
import { UserByEmailSearcher } from '../../../../src/user/application/search/userByEmailSearcher';

const givenUser = UserMother.random();
const allUsers = mock<AllUsers>();
const userByEmailSearcher = new UserByEmailSearcher(allUsers);

describe('User By Email Searcher', () => {
  beforeEach(() => {
    allUsers.searchByCriteria.mockReset();
  });

  it('Encontrar un usuario por email', async () => {
    allUsers.searchByCriteria.mockReturnValue(Promise.resolve(givenUser));
    const user = await userByEmailSearcher.run(givenUser.email);
    expect(user).not.toBeNull();
  });

  it('Regresar null si no se encontró un usuario', async () => {
    allUsers.searchByCriteria.mockReturnValue(Promise.resolve(null));
    const user = await userByEmailSearcher.run(givenUser.email);
    expect(user).toBeNull();
  });
});
