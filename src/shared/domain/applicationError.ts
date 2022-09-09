import { Exception } from './exception';
import { HttpStatusCode } from './httpStatusCode';

export class ApplicationError extends Exception {
  constructor() {
    super(HttpStatusCode.INTERNAL_SERVER_ERROR, 'An application error has occurred');
    this.name = ApplicationError.name;
  }
}
