import { LocaleType } from './locale.type';
import { MONTH_TEXT as EN_GB_MONTH_TEXT, WEEK_TEXT as EN_GB_WEEK_TEXT } from './en_GB';

export const getLocalizedMonth = (locale: LocaleType) => {
  switch (locale) {
    case LocaleType.en_GB:
      return EN_GB_MONTH_TEXT;
    default:
      return {};
  }
}

export const getLocalizedWeek = (locale: LocaleType) => {
  switch (locale) {
    case LocaleType.en_GB:
      return EN_GB_WEEK_TEXT;
    default:
      return {};
  }
}
