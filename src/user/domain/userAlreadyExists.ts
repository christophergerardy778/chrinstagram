import { Exception } from '../../shared/domain/exception';
import { HttpStatusCode } from '../../shared/domain/httpStatusCode';

export class UserAlreadyExists extends Exception {
  constructor() {
    super(HttpStatusCode.CONFLICT, 'User already exists');
  }
}
