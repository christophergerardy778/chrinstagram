import {CreateUser} from "../../../../src/user/application/create/createUser";
import {Success} from "../../../../src/shared/infrastructure/Dto/Success";
import {UserMother} from "../../Domain/UserMother";
import {User} from "../../../../src/user/domain/user";
import {UserNameMother} from "../../Domain/UserNameMother";
import {AllUserFake} from "../../Mocks/AllUserFake";

describe('create user should', () => {
    test('persist an user', async () => {

        const createUser = new CreateUser(new AllUserFake());
        const createUserMock = jest.spyOn(createUser, 'run');

        createUserMock.mockName('createUserMock')
            .mockImplementation(async (id, name, lastname) => {
                return new Success<User>(UserMother.with({
                    name: UserNameMother.create('Christopher AndradeX')
                }));
            });

        const response = await createUser.run('1', '2', '3');

        await expect(response.json().body.userName.value).toEqual('Christopher AndradeX');
    });
});
