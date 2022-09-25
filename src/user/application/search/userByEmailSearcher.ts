import { AllUsers } from '../../domain/allUsers';
import { User } from '../../domain/user';
import { Criteria } from '../../../shared/domain/criteria/criteria';
import { Filters } from '../../../shared/domain/criteria/filters';
import { Filter } from '../../../shared/domain/criteria/filter';
import { FilterOperator } from '../../../shared/domain/criteria/filterOperator';
import { UserEmail } from '../../domain/valueObject/userEmail';

export class UserByEmailSearcher {
  constructor(private readonly allUsers: AllUsers) {
  }

  public async run(email: UserEmail): Promise<User | null> {
    const filters = Filters.create([
      Filter.fromValues('email', FilterOperator.EQUALS, email.value),
    ]);

    return this.allUsers.searchByCriteria(Criteria.create(filters));
  }
}
