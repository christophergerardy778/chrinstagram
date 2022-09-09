import { HttpStatusCode } from './httpStatusCode';

export interface LambdaResponse {
  statusCode: HttpStatusCode,
  body: string | null;
}
