import {UserId} from "../../../src/user/domain/valueObject/userId";
import {faker} from "@faker-js/faker";

export class UserIdMother {
    public static create(id: string) {
        return new UserId(id);
    }

    public static random() {
        return this.create(faker.datatype.uuid());
    }
}
