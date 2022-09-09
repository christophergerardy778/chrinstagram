import { v4 as uuid } from 'uuid';
import { UserId } from '../../../src/user/domain/valueObject/userId';

export class UserIdMother {
  public static create(): UserId {
    return new UserId(uuid());
  }
}
