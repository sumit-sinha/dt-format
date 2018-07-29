import { LocaleType } from './locale.type';
import {
  MONTH_TEXT as en_GB_MONTH_TEXT,
  WEEK_TEXT as en_GB_WEEK_TEXT,
  TIME_MARKER as en_GB_TIME_MARKER
} from './en_GB';
import {
  MONTH_TEXT as es_ES_MONTH_TEXT,
  WEEK_TEXT as es_ES_WEEK_TEXT,
  TIME_MARKER as es_ES_TIME_MARKER
} from './es_ES';
import {
  MONTH_TEXT as fr_FR_MONTH_TEXT,
  WEEK_TEXT as fr_FR_WEEK_TEXT,
  TIME_MARKER as fr_FR_TIME_MARKER
} from './fr_FR';
import {
  MONTH_TEXT as de_DE_MONTH_TEXT,
  WEEK_TEXT as de_DE_WEEK_TEXT,
  TIME_MARKER as de_DE_TIME_MARKER
} from './de_DE';
import {
  MONTH_TEXT as zh_CN_MONTH_TEXT,
  WEEK_TEXT as zh_CN_WEEK_TEXT,
  TIME_MARKER as zh_CN_TIME_MARKER
} from './zh_CN';
import {
  MONTH_TEXT as ru_RU_MONTH_TEXT,
  WEEK_TEXT as ru_RU_WEEK_TEXT,
  TIME_MARKER as ru_RU_TIME_MARKER
} from './ru_RU';
import {
  MONTH_TEXT as ar_SA_MONTH_TEXT,
  WEEK_TEXT as ar_SA_WEEK_TEXT,
  TIME_MARKER as ar_SA_TIME_MARKER
} from './ar_SA';

export const getLocalizedMonth = (locale: LocaleType = LocaleType.en_GB) => {
  switch (locale) {
    case LocaleType.en_GB:
      return en_GB_MONTH_TEXT;
    case LocaleType.es_ES:
      return es_ES_MONTH_TEXT;
    case LocaleType.fr_FR:
      return fr_FR_MONTH_TEXT;
    case LocaleType.de_DE:
      return de_DE_MONTH_TEXT;
    case LocaleType.zh_CN:
      return zh_CN_MONTH_TEXT;
    case LocaleType.ru_RU:
      return ru_RU_MONTH_TEXT;
    case LocaleType.ar_SA:
      return ar_SA_MONTH_TEXT;
    default:
      throw new Error(`Unsupported locale: ${locale}`);
  }
}

export const getLocalizedWeek = (locale: LocaleType = LocaleType.en_GB) => {
  switch (locale) {
    case LocaleType.en_GB:
      return en_GB_WEEK_TEXT;
    case LocaleType.es_ES:
      return es_ES_WEEK_TEXT;
    case LocaleType.fr_FR:
      return fr_FR_WEEK_TEXT;
    case LocaleType.de_DE:
      return de_DE_WEEK_TEXT;
    case LocaleType.zh_CN:
      return zh_CN_WEEK_TEXT;
    case LocaleType.ru_RU:
      return ru_RU_WEEK_TEXT;
    case LocaleType.ar_SA:
      return ar_SA_WEEK_TEXT;
    default:
      throw new Error(`Unsupported locale: ${locale}`);
  }
}

export const getLocalizedTimeMarker = (locale: LocaleType = LocaleType.en_GB) => {
  switch (locale) {
    case LocaleType.en_GB:
      return en_GB_TIME_MARKER;
    case LocaleType.es_ES:
      return es_ES_TIME_MARKER;
    case LocaleType.fr_FR:
      return fr_FR_TIME_MARKER;
    case LocaleType.de_DE:
      return de_DE_TIME_MARKER;
    case LocaleType.zh_CN:
      return zh_CN_TIME_MARKER;
    case LocaleType.ru_RU:
      return ru_RU_TIME_MARKER;
    case LocaleType.ar_SA:
      return ar_SA_TIME_MARKER;
    default:
      throw new Error(`Unsupported locale: ${locale}`);
  }
}
