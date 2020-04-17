import { timeZoneName } from './timeZone';

export { timeZoneName, timeZoneList, isCorrectTimeZoneName } from './timeZone';

export interface IWela {
    systemTimeZone: timeZoneName;
    dt: Date;
    dtTimeZone: timeZoneName;
}

export function getSystemTimeZone(): timeZoneName {
    return Intl.DateTimeFormat().resolvedOptions().timeZone as timeZoneName;
}

export function createWela(dt: Date = new Date(), dtTimeZone?: timeZoneName): IWela {
    return {
        systemTimeZone: getSystemTimeZone(), // default
        dt: new Date(dt),
        dtTimeZone: dtTimeZone ? dtTimeZone : getSystemTimeZone(),
    };
}

export function nowInTimeZone(dtTimeZone: timeZoneName): IWela {
    return createWela(new Date(new Date().toLocaleString('en-US', { timeZone: dtTimeZone })), dtTimeZone);
}

export function nowInUTC(): IWela {
    return nowInTimeZone('UTC');
}

export function nowInAsiaBangkok(): IWela {
    return nowInTimeZone('Asia/Bangkok');
}

export function convertWelaToTimeZone(wela: IWela, dtTimeZone?: timeZoneName): IWela {
    const dtz = dtTimeZone ? nowInTimeZone(dtTimeZone).dt : createWela().dt;
    const now = nowInTimeZone(wela.dtTimeZone).dt;

    const diff = now.getTime() - dtz.getTime();

    return createWela(new Date(wela.dt.getTime() - diff));
}

export function convertWelaToSystem(wela: IWela): IWela {
    return convertWelaToTimeZone(wela);
}

export function convertWelaToUTC(wela: IWela): IWela {
    return convertWelaToTimeZone(wela, 'UTC');
}

export function convertWelaToAsiaBangkok(wela: IWela): IWela {
    return convertWelaToTimeZone(wela, 'Asia/Bangkok');
}
