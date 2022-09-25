import { Conflict } from '../../../shared/domain/exception/conflict';

export class BadUserCredentials extends Conflict {
  constructor() {
    super('Wrong credentials');
  }
}
