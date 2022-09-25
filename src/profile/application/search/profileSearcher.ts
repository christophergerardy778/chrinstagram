import { FilterOperator } from '../../../shared/domain/criteria/filterOperator';
import { AllProfiles } from '../../domain/repository/allProfiles';
import { Criteria } from '../../../shared/domain/criteria/criteria';
import { Profile } from '../../domain/profile';
import { Filters } from '../../../shared/domain/criteria/filters';
import { Filter } from '../../../shared/domain/criteria/filter';
import { ProfileUsername } from '../../domain/valueObject/profileUsername';

export class ProfileSearcher {
  constructor(private readonly allProfiles: AllProfiles) {
  }

  public async run(username: ProfileUsername): Promise<Profile | null> {
    const criteria = Criteria.create(
      Filters.create([
        Filter.fromValues('username', FilterOperator.EQUALS, username.value),
      ]),
    );

    return this.allProfiles.searchByCriteria(criteria);
  }
}
