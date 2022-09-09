import { Conflict } from '../../../shared/domain/exception/Conflict';

export class EmailAlreadyTaken extends Conflict {
  constructor() {
    super('Email already taken');
  }
}
