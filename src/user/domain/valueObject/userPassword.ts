import { StringValueObject } from '../../../shared/domain/valueObject/stringValueObject';

export class UserPassword extends StringValueObject {
  private readonly PASSWORD_MIN_LENGTH = 6;

  constructor(password: string) {
    super(password);
    this.hasMinimalStrongLevel(password);
  }

  public static create(password: string) {
    return new UserPassword(password);
  }

  private hasMinimalStrongLevel(password: string) {
    return password.length >= this.PASSWORD_MIN_LENGTH;
  }
}
