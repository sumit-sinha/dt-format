import { DateTimePattern } from './date.time.pattern';
import { getLocalizedMonth, LocaleType, getLocalizedWeek } from './locale';

enum DateTimeType {
  SHORT = 'short',
  LONG = 'long',
}

enum DayTimeMarker {
  AM = 'AM',
  PM = 'PM',
}

const POSSIBLE_PATTERNS = [
  DateTimePattern.FULL_DATE,
  DateTimePattern.SHORT_DATE,
  DateTimePattern.FULL_YEAR,
  DateTimePattern.SHORT_YEAR,
  DateTimePattern.FULL_MINUTE,
  DateTimePattern.SHORT_MINUTE,
  DateTimePattern.FULL_24_HOUR,
  DateTimePattern.SHORT_24_HOUR,
  DateTimePattern.FULL_HOUR,
  DateTimePattern.SHORT_HOUR,
  DateTimePattern.FULL_SECOND,
  DateTimePattern.SHORT_SECOND,
  DateTimePattern.FULL_MILLISECOND,
  DateTimePattern.MEDIUM_MILLISECOND,
  DateTimePattern.SHORT_MILLISECOND,
  DateTimePattern.AM_PM_MARKER,
  DateTimePattern.FULL_MONTH,
  DateTimePattern.MEDIUM_MONTH,
  DateTimePattern.SHORT_MONTH,
  DateTimePattern.FULL_WEEK,
  DateTimePattern.MEDIUM_WEEK,
  DateTimePattern.SHORT_WEEK,
];

const getWeek = (week: number, key: string) => getLocalizedWeek(LocaleType.en_GB)[`${week}`][key];
const getMonth = (month: number, key: string) => getLocalizedMonth(LocaleType.en_GB)[`${month}`][key];
const suffixWithZero = (value: number, comparator: number = 9) => value <= comparator ? `0${value}`: `${value}`;
const calculateIn12HourFormat = (value: number) => value > 12 ? value - 12 : value;

const getDateValue = (date: Date, pattern: DateTimePattern) => {
  switch (pattern) {
    case DateTimePattern.SHORT_DATE:
      return `${date.getDate()}`;
    case DateTimePattern.FULL_DATE:
      return suffixWithZero(date.getDate());
    case DateTimePattern.SHORT_YEAR:
      return `${date.getFullYear()}`.substring(2);
    case DateTimePattern.FULL_YEAR:
      return `${date.getFullYear()}`;
    case DateTimePattern.SHORT_MONTH:
      return suffixWithZero(date.getMonth() + 1);
    case DateTimePattern.MEDIUM_MONTH:
      return getMonth(date.getMonth(), DateTimeType.SHORT);
    case DateTimePattern.FULL_MONTH:
      return getMonth(date.getMonth(), DateTimeType.LONG);
    case DateTimePattern.SHORT_WEEK:
      return suffixWithZero(date.getDay());
    case DateTimePattern.MEDIUM_WEEK:
      return getWeek(date.getDay(), DateTimeType.SHORT);
    case DateTimePattern.FULL_WEEK:
      return getWeek(date.getDay(), DateTimeType.LONG);
    case DateTimePattern.FULL_MINUTE:
      return suffixWithZero(date.getMinutes());
    case DateTimePattern.SHORT_MINUTE:
      return date.getMinutes();
    case DateTimePattern.SHORT_24_HOUR:
      return date.getHours();
    case DateTimePattern.FULL_24_HOUR:
      return suffixWithZero(date.getHours());
    case DateTimePattern.SHORT_HOUR:
      return calculateIn12HourFormat(date.getHours());
    case DateTimePattern.FULL_HOUR:
      return suffixWithZero(calculateIn12HourFormat(date.getHours()));
    case DateTimePattern.SHORT_SECOND:
      return date.getSeconds();
    case DateTimePattern.FULL_SECOND:
      return suffixWithZero(date.getSeconds());
    case DateTimePattern.SHORT_MILLISECOND:
      return date.getMilliseconds();
    case DateTimePattern.MEDIUM_MILLISECOND:
      return suffixWithZero(date.getMilliseconds());
    case DateTimePattern.FULL_MILLISECOND:
      return suffixWithZero(date.getMilliseconds(), 99);
    case DateTimePattern.AM_PM_MARKER:
      return date.getHours() >= 12 ? DayTimeMarker.PM : DayTimeMarker.AM;
    default:
      return '';
  }
}

export class DateTimeFormat {
  public static format(date: Date, pattern: string): string {
    let value = pattern;
    POSSIBLE_PATTERNS.forEach((possiblePattern: string) => {
      while (value.indexOf(possiblePattern) !== -1) {
        value = value.replace(possiblePattern, getDateValue(date, possiblePattern as DateTimePattern));
      }
    });

    return value;
  }
}
