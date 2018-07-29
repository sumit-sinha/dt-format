import { LocaleType } from './locale.type';

enum DataType {
  WEEK = 'week',
  MONTH = 'month',
  TIME_MARKER = 'time-marker',
}

const getLocalizedData = (type: DataType, locale: LocaleType = LocaleType.en_GB) => {
  const path = `./${locale}`;

  try {
    const data = require(path);
    switch (type) {
      case DataType.MONTH:
        return data.MONTH_TEXT;
      case DataType.WEEK:
        return data.WEEK_TEXT;
      case DataType.TIME_MARKER:
        return data.TIME_MARKER;
      default:
        return {};
    }
  } catch (e) {
    throw new Error(`Unsupported locale: ${locale}`);
  }
};

export const getLocalizedMonth = (locale: LocaleType) => {
  return getLocalizedData(DataType.MONTH, locale);
};

export const getLocalizedWeek = (locale: LocaleType) => {
  return getLocalizedData(DataType.WEEK, locale);
};

export const getLocalizedTimeMarker = (locale: LocaleType) => {
  return getLocalizedData(DataType.TIME_MARKER, locale);
};
