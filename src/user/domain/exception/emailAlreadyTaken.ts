import { Conflict } from '../../../shared/domain/exception/conflict';

export class EmailAlreadyTaken extends Conflict {
  constructor() {
    super('Email already taken');
  }
}
