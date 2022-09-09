import { Exception } from './exception';
import { HttpStatusCode } from './httpStatusCode';

export class InvalidParam extends Exception {
  constructor(protected value: any, protected field: string) {
    super(HttpStatusCode.BAD_REQUEST, 'Invalid request params');
    this.name = InvalidParam.name;
    console.log(`${value} is an invalid value for ${field}`);
  }
}
