import { Conflict } from '../../../shared/domain/exception/Conflict';

export class UsernameAlreadyTaken extends Conflict {
  constructor() {
    super('Username already taken');
  }
}
