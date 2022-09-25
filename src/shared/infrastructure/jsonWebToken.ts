import jsonwebtoken from 'jsonwebtoken';
import { Jwt } from '../domain/jwt';

export class JsonWebToken implements Jwt {
  // eslint-disable-next-line class-methods-use-this
  async generate(payload: { [p: string]: unknown }): Promise<string> {
    return jsonwebtoken.sign(payload, process.env.JWT_KEY!);
  }

  // eslint-disable-next-line class-methods-use-this
  async verify(token: string): Promise<boolean> {
    return new Promise((resolve) => {
      jsonwebtoken.verify(
        token,
        process.env.JWT_KEY!,
        (error) => resolve(error === null),
      );
    });
  }
}
