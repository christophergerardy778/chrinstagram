import {AllUsers} from "../../../src/user/domain/allUsers";
import {User} from "../../../src/user/domain/user";
import {UserId} from "../../../src/user/domain/valueObject/userId";

export class AllUserFake implements AllUsers {
    private readonly users: User[] = [];

    async save(user: User): Promise<void> {
        this.users.push(user);
    }

    async withId(id: UserId): Promise<User> {
        return this.users.find(user => user.id.value === id.value)!;
    }
}
