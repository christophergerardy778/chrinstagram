import { Conflict } from '../../../shared/domain/exception/conflict';

export class UsernameAlreadyTaken extends Conflict {
  constructor() {
    super('Username already taken');
  }
}
