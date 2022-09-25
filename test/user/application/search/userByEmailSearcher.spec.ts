import { mock } from 'jest-mock-extended';
import { UserMother } from '../../domain/userMother';
import { AllUsers } from '../../../../src/user/domain/allUsers';
import { UserByEmailSearcher } from '../../../../src/user/application/search/userByEmailSearcher';

const givenUser = UserMother.random();
const allUsers = mock<AllUsers>();
const userByEmailSearcher = new UserByEmailSearcher(allUsers);

describe('Buscar usuario por email', () => {
  beforeEach(() => {
    allUsers.searchByCriteria.mockReset();
  });

  it('Retornar un usuario si si lo encuentra', async () => {
    allUsers.searchByCriteria.mockReturnValue(Promise.resolve(givenUser));
    const user = await userByEmailSearcher.run(givenUser.email);
    expect(user).not.toBeNull();
  });

  it('Regresar null si no encontró un usuario', async () => {
    allUsers.searchByCriteria.mockReturnValue(Promise.resolve(null));
    const user = await userByEmailSearcher.run(givenUser.email);
    expect(user).toBeNull();
  });
});
