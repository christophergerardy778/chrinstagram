import { HttpStatusCode } from './httpStatusCode';

export abstract class Exception extends Error {
  protected constructor(
    public readonly httpStatusCode: HttpStatusCode,
    public readonly message: string,
  ) {
    super(message);
  }
}
