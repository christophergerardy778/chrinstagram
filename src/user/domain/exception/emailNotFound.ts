import { NotFount } from '../../../shared/domain/exception/notFount';

export class EmailNotFound extends NotFount {
  constructor() {
    super('Email not found, try again');
  }
}
