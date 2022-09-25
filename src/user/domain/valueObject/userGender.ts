import { Gender } from '../gender';
import { InvalidParam } from '../../../shared/domain/exception/invalidParam';

export class UserGender {
  readonly value!: Gender;

  constructor(gender: Gender) {
    if (!UserGender.isValidValue(gender)) {
      throw new InvalidParam(gender, UserGender.name);
    }

    this.value = gender;
  }

  private static isValidValue(value: number) {
    return Object.values(Gender).includes(value);
  }
}
