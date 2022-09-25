import { Exception } from '../exception';
import { HttpStatusCode } from '../httpStatusCode';

export class Conflict extends Exception {
  constructor(message: string) {
    super(HttpStatusCode.CONFLICT, message);
  }
}
