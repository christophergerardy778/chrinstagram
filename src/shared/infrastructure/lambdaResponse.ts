import { HttpStatusCode } from '../domain/httpStatusCode';

export interface LambdaResponse {
  statusCode: HttpStatusCode,
  body: string | null;
}
