import { StringValueObject } from '../../../shared/domain/valueObject/stringValueObject';
import { BiographyLengthTooLong } from '../exceptions/biographyLengthTooLong';

export class ProfileBiography extends StringValueObject {
  public static readonly MAX_BIOGRAPHY_LENGTH = 100;

  constructor(value: string) {
    super(value);
    ProfileBiography.biographyLengthIsValid(value);
  }

  private static biographyLengthIsValid(value: string) {
    if (value.length > ProfileBiography.MAX_BIOGRAPHY_LENGTH) {
      throw new BiographyLengthTooLong();
    }
  }
}
