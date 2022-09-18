import { Exception } from '../exception';
import { HttpStatusCode } from '../httpStatusCode';

export class NotFount extends Exception {
  constructor(message: string) {
    super(HttpStatusCode.NOT_FOUNT, message);
  }
}
