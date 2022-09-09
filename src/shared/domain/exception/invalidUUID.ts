import { Exception } from '../exception';
import { HttpStatusCode } from '../httpStatusCode';

export class InvalidUUID extends Exception {
  constructor() {
    super(HttpStatusCode.BAD_REQUEST, 'Invalid ID');
  }
}
