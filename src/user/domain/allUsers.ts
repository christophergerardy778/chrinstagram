import { User } from './user';
import { Criteria } from '../../shared/domain/criteria/criteria';

export interface AllUsers {
  save(user: User): Promise<void>;
  searchByCriteria(criteria: Criteria): Promise<User | null>;
}
