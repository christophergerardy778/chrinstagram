import { Conflict } from '../../../shared/domain/exception/Conflict';

export class BadUserCredentials extends Conflict {
  constructor() {
    super('Wrong credentials');
  }
}
