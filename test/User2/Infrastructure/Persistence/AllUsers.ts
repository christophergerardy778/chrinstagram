import {AllUserStub} from "../../Mocks/AllUserStub";
import {UserIdMother} from "../../Domain/UserIdMother";

describe('AllUsers repository should', () => {
    it('Find a user with uuid: c5c9da35-a45c-4c5f-9293-510b0c48dbdb', async () => {
        const allUserStub = new AllUserStub();
        const givenUserId = UserIdMother.create('c5c9da35-a45c-4c5f-9293-510b0c48dbdb');

        const userResearched = await allUserStub.withId(givenUserId);

        expect(userResearched.id.value).toEqual('c5c9da35-a45c-4c5f-9293-510b0c48dbdb');
    });
});
