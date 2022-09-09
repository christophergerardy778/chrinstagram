import { UserMother } from '../userMother';
import { UserLogin } from '../../../../src/user/domain/services/userLogin';

const givenUser = UserMother.random();
const userLogin = new UserLogin();

describe('User login', () => {
  it('Regresar un JWT si las credenciales de usuario son correctas', async () => {

  });
});
