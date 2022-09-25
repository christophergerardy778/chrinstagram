import dayjs from 'dayjs';

export class BirthdayValidator {
  public static isValid(birthday: string) {
    return this.isAValidDate(birthday) && !this.isDateAfterToday(birthday);
  }

  private static isAValidDate(value: string): boolean {
    return dayjs(value).isValid();
  }

  private static isDateAfterToday(value: string) {
    const today = dayjs();
    return dayjs(value).isAfter(today);
  }
}
