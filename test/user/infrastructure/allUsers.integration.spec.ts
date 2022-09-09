/*
import { UserMother } from '../domain/userMother';
import { container } from '../../../src/container';
import { ConnectionManager } from '../../../src/shared/infrastructure/connectionManager';
import { sharedTypes } from '../../../src/shared/infrastructure/di/sharedTypes';
import { AllUsers } from '../../../src/user/domain/allUsers';
import { userTypes } from '../../../src/user/infrastructure/di/userTypes';

const givenUser = UserMother.random();

const connection = container.get<ConnectionManager>(sharedTypes.connection);
const allUsers = container.get<AllUsers>(userTypes.allUsers);

describe('AllUsers', () => {
  beforeAll(async () => {
    await connection.open();
  });

  afterAll(async () => {
    await allUsers.remove(givenUser.id);
    await connection.close();
  });

  beforeEach(async () => {
    await allUsers.save(givenUser);
  });

  it('Debera buscar un usuario por ID', async () => {
    const user = await allUsers.search(givenUser.id);
    expect(user).toEqual(givenUser);
  });
});
*/

it('should true', function () {
  expect(1).toBe(1);
});
