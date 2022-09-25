import { Profile } from '../profile';
import { Criteria } from '../../../shared/domain/criteria/criteria';

export interface AllProfiles {
  save(profile: Profile): Promise<void>;
  searchByCriteria(criteria: Criteria): Promise<Profile | null>;
}
