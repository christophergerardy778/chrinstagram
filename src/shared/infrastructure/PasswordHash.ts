import { compare, genSalt, hash as hashPassword } from 'bcryptjs';
import { injectable } from 'inversify';
import { PasswordHashing } from '../domain/passwordHashing';

@injectable()
export class PasswordHash implements PasswordHashing {
  private readonly ROUNDS = 10;

  // eslint-disable-next-line class-methods-use-this
  compare(password: string, hash: string): Promise<boolean> {
    return compare(password, hash);
  }

  async hash(password: string): Promise<string> {
    const salt = await genSalt(this.ROUNDS);
    return hashPassword(password, salt);
  }
}
