import {UserName} from "../../../src/user/domain/valueObject/userName";
import {faker} from "@faker-js/faker";

export class UserNameMother {
    public static create(val: string) {
        return new UserName(val);
    }

    public static random() {
        return this.create(faker.name.firstName());
    }
}
