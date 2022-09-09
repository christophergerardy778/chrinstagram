import { LambdaResponse } from '../domain/lambdaResponse';
import { HttpStatusCode } from '../domain/httpStatusCode';
import { Exception } from '../domain/exception';

export class HttpResponse<T> {
  readonly statusCode!: HttpStatusCode;

  readonly body!: string | null;

  constructor(status: HttpStatusCode, body: T | null) {
    this.statusCode = status;
    this.body = JSON.stringify(body);
  }

  public static json<T>(status: HttpStatusCode, body: T): LambdaResponse {
    return new HttpResponse(status, body);
  }

  public static fromException(exception: Exception): LambdaResponse {
    return new HttpResponse(exception.httpStatusCode, {
      message: exception.message,
    });
  }
}
