import { expect } from 'chai';
import { DateTimeFormat } from './date.time.format';
import { LocaleType } from './locale';

describe('Date Format', () => {
  describe('format', () => {
    it('should replace "yyyy" with full year', () => {
      const dt = new Date(2000, 0, 1, 0, 0, 0, 0);
      expect(DateTimeFormat.format(dt, 'yyyy')).to.equal(`2000`);
    });

    it('should replace "dd yyyy" with date and full year', () => {
      const dt = new Date(2005, 5, 11, 0, 0, 0, 0);
      expect(DateTimeFormat.format(dt, 'dd yyyy')).to.equal(`11 2005`);
    });

    it('should replace "yy" with 2 digit year', () => {
      const dt = new Date(2005, 5, 11, 0, 0, 0, 0);
      expect(DateTimeFormat.format(dt, 'yy')).to.equal(`05`);
    });

    it('should replace "d" with date', () => {
      const dt = new Date(2005, 5, 1, 0, 0, 0, 0);
      expect(DateTimeFormat.format(dt, 'd')).to.equal(`1`);
    });

    it('should replace "dd" with date, if date is between 0-9 then add 0 as suffix', () => {
      const dt = new Date(2005, 5, 1, 0, 0, 0, 0);
      expect(DateTimeFormat.format(dt, 'dd')).to.equal(`01`);
    });

    it('should replace "MM" with month, if month is between 0-9 then add 0 as suffix', () => {
      const dt = new Date(2005, 5, 1, 0, 0, 0, 0);
      expect(DateTimeFormat.format(dt, 'MM')).to.equal(`06`);
    });

    it('should replace "MMM" with short month text', () => {
      const dt = new Date(2005, 5, 1, 0, 0, 0, 0);
      expect(DateTimeFormat.format(dt, 'MMM')).to.equal(`Jun`);
    });

    it('should replace "MMMM" with long month text', () => {
      const dt = new Date(2005, 5, 1, 0, 0, 0, 0);
      expect(DateTimeFormat.format(dt, 'MMMM')).to.equal(`June`);
    });

    it('should replace "dd.MMMM.yyyy" with expected date values', () => {
      const dt = new Date(2005, 5, 1, 0, 0, 0, 0);
      expect(DateTimeFormat.format(dt, 'dd.MMMM.yyyy')).to.equal(`01.June.2005`);
    });

    it('should replace "EE" with current day in week as number i.e Monday as 1', () => {
      const dt = new Date(2005, 5, 1, 0, 0, 0, 0);
      expect(DateTimeFormat.format(dt, 'EE')).to.equal('03');
    });

    it('should replace "EEE" with current day in week as small text i.e Mon, Tue etc', () => {
      const dt = new Date(2005, 5, 1, 0, 0, 0, 0);
      expect(DateTimeFormat.format(dt, 'EEE')).to.equal('Wed');
    });

    it('should replace "EEEE" with current day in week as full text i.e Monday, Tuesday etc', () => {
      const dt = new Date(2005, 5, 1, 0, 0, 0, 0);
      expect(DateTimeFormat.format(dt, 'EEEE')).to.equal('Wednesday');
    });

    it('should convert "EEEE, dd MMMM yyyy" with respective date value', () => {
      const dt = new Date(2005, 5, 1, 0, 0, 0, 0);
      expect(DateTimeFormat.format(dt, 'EEEE, dd MMMM yyyy')).to.equal('Wednesday, 01 June 2005');
    });

    it('should replace "mm" with minute, if minute is between 0-9 then add 0 as suffix', () => {
      const dt = new Date(2005, 5, 1, 0, 9, 0, 0);
      expect(DateTimeFormat.format(dt, 'mm')).to.equal('09');
    });

    it('should replace "m" with minute', () => {
      const dt = new Date(2005, 5, 1, 0, 9, 0, 0);
      expect(DateTimeFormat.format(dt, 'm')).to.equal('9');
    });

    it('should replace "H" with hour', () => {
      const dt = new Date(2005, 5, 1, 16, 9, 0, 0);
      expect(DateTimeFormat.format(dt, 'H')).to.equal('16');
    });

    it('should replace "h" with hour in 12 hour format', () => {
      const dt16 = new Date(2005, 5, 1, 16, 9, 0, 0);
      expect(DateTimeFormat.format(dt16, 'h')).to.equal('4');

      const dt5 = new Date(2005, 5, 1, 5, 9, 0, 0);
      expect(DateTimeFormat.format(dt5, 'h')).to.equal('5');
    });

    it('should replace "HH" with hour, if hour is between 0-9 then add 0 as suffix', () => {
      const dt = new Date(2005, 5, 1, 8, 9, 0, 0);
      expect(DateTimeFormat.format(dt, 'HH')).to.equal('08');
    });

    it('should replace "hh" with hour in 12 hour format, if hour is between 0-9 then add 0 as suffix', () => {
      const dt16 = new Date(2005, 5, 1, 16, 9, 0, 0);
      expect(DateTimeFormat.format(dt16, 'hh')).to.equal('04');

      const dt5 = new Date(2005, 5, 1, 5, 9, 0, 0);
      expect(DateTimeFormat.format(dt5, 'hh')).to.equal('05');

      const dt11 = new Date(2005, 5, 1, 11, 9, 0, 0);
      expect(DateTimeFormat.format(dt11, 'hh')).to.equal('11');
    });

    it('should replace "s" with second', () => {
      const dt = new Date(2005, 5, 1, 16, 9, 25, 0);
      expect(DateTimeFormat.format(dt, 's')).to.equal('25');
    });

    it('should replace "ss" with second, if second is between 0-9 then add 0 as suffix', () => {
      const dt = new Date(2005, 5, 1, 8, 9, 5, 0);
      expect(DateTimeFormat.format(dt, 'ss')).to.equal('05');
    });

    it('should replace "HH:mm:ss" with respective time', () => {
      const dt = new Date(2005, 5, 1, 16, 9, 25, 10);
      expect(DateTimeFormat.format(dt, 'HH:mm:ss')).to.equal('16:09:25');
    });

    it('should replace "S" with milliseconds', () => {
      const dt = new Date(2005, 5, 1, 16, 9, 25, 816);
      expect(DateTimeFormat.format(dt, 'S')).to.equal('816');
    });

    it('should replace "SS" with milliseconds, if second is between 0-9 then add 0 as suffix', () => {
      const dt = new Date(2005, 5, 1, 16, 9, 25, 9);
      expect(DateTimeFormat.format(dt, 'SS')).to.equal('09');
    });

    it('should replace "SSS" with milliseconds, if second is between 0-99 then add 0 as suffix', () => {
      const dt = new Date(2005, 5, 1, 16, 9, 25, 59);
      expect(DateTimeFormat.format(dt, 'SSS')).to.equal('059');
    });

    it('should replace "EEEE, dd MMMM yyyy HH:mm:ss.SSS" with respective date time value', () => {
      const dt = new Date(2005, 5, 1, 16, 9, 25, 771);
      expect(DateTimeFormat.format(dt, 'EEEE, dd MMMM yyyy HH:mm:ss.SSS')).to.equal('Wednesday, 01 June 2005 16:09:25.771');
    });

    it('should replace "hh:mm:ss a" with respective time and AM/PM indicator', () => {
      const dtAM = new Date(2005, 11, 12, 3, 52, 11, 737);
      expect(DateTimeFormat.format(dtAM, 'hh:mm:ss a')).to.equal('03:52:11 AM');

      const dtPM = new Date(2005, 11, 12, 15, 52, 11, 737);
      expect(DateTimeFormat.format(dtPM, 'hh:mm:ss a')).to.equal('03:52:11 PM');
    });

    it('should support locale as an optional parameter', () => {
      const dtAM = new Date(2005, 11, 12, 3, 52, 11, 737);
      expect(DateTimeFormat.format(dtAM, 'EEEE MMM', LocaleType.en_GB)).to.equal('Monday Dec');
      expect(DateTimeFormat.format(dtAM, 'EEEE MMM', LocaleType.fr_FR)).to.equal('Lundi Déc');
    });

    it('should consider en_GB as default locale if not passed as param', () => {
      const dtAM = new Date(2005, 11, 12, 3, 52, 11, 737);
      expect(DateTimeFormat.format(dtAM, 'EEEE MMM')).to.equal('Monday Dec');
    });

    it('should support locale for french language', () => {
      const dtAM = new Date(2005, 6, 8, 0, 0, 0, 0);
      expect(DateTimeFormat.format(dtAM, 'EEEE MMMM', LocaleType.fr_FR)).to.equal('Vendredi Juillet');
    });

    it('should support locale for german language', () => {
      const dtAM = new Date(2005, 6, 8, 0, 0, 0, 0);
      expect(DateTimeFormat.format(dtAM, 'EEEE MMMM', LocaleType.de_DE)).to.equal('Freitag Juli');
    });

    it('should support locale for spanish language', () => {
      const dtAM = new Date(2005, 6, 8, 0, 0, 0, 0);
      expect(DateTimeFormat.format(dtAM, 'EEEE MMMM', LocaleType.es_ES)).to.equal('Viernes Julio');
    });

    it('should support locale for simplified chinese language', () => {
      const dtAM = new Date(2005, 6, 8, 0, 0, 0, 0);
      expect(DateTimeFormat.format(dtAM, 'EEEE MMMM', LocaleType.zh_CN)).to.equal('星期五 七月');
    });

    it('should throw an exception if unsupported locale', () => {
      const dtAM = new Date(2005, 6, 8, 0, 0, 0, 0);
      try {
        DateTimeFormat.format(dtAM, 'EEEE MMMM', 'qw_PO' as LocaleType);
        throw new Error('date format should not work here!!!');
      } catch (e) {
        expect(e.message).to.equal('Unsupported locale: qw_PO');
      }
    });
  });
});
