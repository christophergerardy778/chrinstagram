import { Exception } from '../../../shared/domain/exception';
import { HttpStatusCode } from '../../../shared/domain/httpStatusCode';

export class BiographyLengthTooLong extends Exception {
  constructor() {
    super(HttpStatusCode.BAD_REQUEST, 'Biography too long');
  }
}
