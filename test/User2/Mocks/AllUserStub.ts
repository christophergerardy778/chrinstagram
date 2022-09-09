import {AllUsers} from "../../../src/user/domain/allUsers";
import {User} from "../../../src/user/domain/user";
import {UserId} from "../../../src/user/domain/valueObject/userId";
import {UserMother} from "../Domain/UserMother";
import {UserIdMother} from "../Domain/UserIdMother";

export class AllUserStub implements AllUsers {

    private readonly users: User[] = [
        UserMother.random(),

        UserMother.with({
            id: UserIdMother.create('c5c9da35-a45c-4c5f-9293-510b0c48dbdb'),
        })
    ];

    async save(user: User): Promise<void> {
        return Promise.resolve(undefined);
    }

    async withId(id: UserId): Promise<User> {
        return this.users.find(user => user.id.value === id.value)!;
    }
}
