import { getSystemTimeZone, nowInTimeZone, nowInUTC, nowInAsiaBangkok, convertWelaToUTC } from './index';
import { differenceInHours } from 'date-fns';

describe('getSystemTimeZone', () => {
    it('should return Asia/Bangkok', () => {
        expect(getSystemTimeZone()).toBe('Asia/Bangkok');
    });
});

describe('nowInTimeZone', () => {
    it('should have diff in 7 hours', () => {
        // the creation of utc and sys is slightly different
        // so we have to set milliseconds to zero before compare
        const { dt: utc, systemTimeZone, dtTimeZone } = nowInTimeZone('UTC');
        const sys = new Date();

        const diff = Math.abs(differenceInHours(utc.setMilliseconds(0), sys.setMilliseconds(0)));

        expect(diff).toBe(7);

        expect(systemTimeZone).toBe('Asia/Bangkok');
        expect(dtTimeZone).toBe('UTC');
    });

    it('should have diff in 0 hours', () => {
        // the creation of bkk and sys is slightly different
        // so we have to set milliseconds to zero before compare
        const { dt: bkk, systemTimeZone, dtTimeZone } = nowInTimeZone('Asia/Bangkok');
        const sys = new Date();

        const diff = Math.abs(differenceInHours(bkk.setMilliseconds(0), sys.setMilliseconds(0)));

        expect(diff).toBe(0);

        expect(systemTimeZone).toBe('Asia/Bangkok');
        expect(dtTimeZone).toBe('Asia/Bangkok');
    });
});

describe('nowInUTC', () => {
    it('should have diff in 7 hours', () => {
        // the creation of utc and sys is slightly different
        // so we have to set milliseconds to zero before compare
        const utc = nowInUTC().dt;
        const sys = new Date();

        const diff = Math.abs(differenceInHours(utc.setMilliseconds(0), sys.setMilliseconds(0)));

        expect(diff).toBe(7);
    });
});

describe('nowInAsiaBangkok', () => {
    it('should have diff in 0 hours', () => {
        // the creation of bkk and sys is slightly different
        // so we have to set milliseconds to zero before compare
        const bkk = nowInAsiaBangkok().dt;
        const sys = new Date();

        const diff = Math.abs(differenceInHours(bkk.setMilliseconds(0), sys.setMilliseconds(0)));

        expect(diff).toBe(0);
    });
});

describe('convertWelaToUTC', () => {
    it('should have diff in 0 hours (supply asia/bangkok)', () => {
        // the creation of utc and now is slightly different
        // so we have to set milliseconds to zero before compare
        const utc = nowInUTC().dt;
        const now = convertWelaToUTC(nowInAsiaBangkok()).dt;

        const diff = Math.abs(differenceInHours(utc.setMilliseconds(0), now.setMilliseconds(0)));

        expect(diff).toBe(0);
    });

    it('should have diff in 0 hours (supply utc)', () => {
        // the creation of utc and now is slightly different
        // so we have to set milliseconds to zero before compare
        const utc = nowInUTC().dt;
        const now = convertWelaToUTC(nowInUTC()).dt;

        const diff = Math.abs(differenceInHours(utc.setMilliseconds(0), now.setMilliseconds(0)));

        expect(diff).toBe(0);
    });

    it('should have diff in 0 hours (supply europe/london)', () => {
        // the creation of utc and now is slightly different
        // so we have to set milliseconds to zero before compare
        const utc = nowInUTC().dt;
        const now = convertWelaToUTC(nowInTimeZone('Europe/London')).dt;

        const diff = Math.abs(differenceInHours(utc.setMilliseconds(0), now.setMilliseconds(0)));

        expect(diff).toBe(0);
    });
});
