import { AllUsers } from '../../domain/allUsers';
import { User } from '../../domain/user';
import { Criteria } from '../../../shared/domain/criteria/criteria';
import { Filter } from '../../../shared/domain/criteria/filter';
import { FilterOperator } from '../../../shared/domain/criteria/filterOperator';
import { UserEmail } from '../../domain/valueObject/userEmail';
import { Filters } from '../../../shared/domain/criteria/filters';
import { EmailNotFound } from '../../domain/exception/emailNotFound';

export class UserByEmailFinder {
  constructor(private readonly allUsers: AllUsers) {
  }

  public async run(email: UserEmail): Promise<User> {
    const criteria = UserByEmailFinder.getCriteriaByEmail(email);
    const user = await this.allUsers.searchByCriteria(criteria);

    if (user === null) {
      throw new EmailNotFound();
    }

    return user;
  }

  private static getCriteriaByEmail(email: UserEmail) {
    return Criteria.create(
      Filters.create([
        Filter.fromValues('email', FilterOperator.EQUALS, email.value),
      ]),
    );
  }
}
