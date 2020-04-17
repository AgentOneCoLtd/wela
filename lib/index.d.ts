import { timeZoneName } from './timeZone';
export { timeZoneName, timeZoneList, isCorrectTimeZoneName } from './timeZone';
export interface IWela {
    systemTimeZone: timeZoneName;
    dt: Date;
    dtTimeZone: timeZoneName;
}
export declare function getSystemTimeZone(): timeZoneName;
export declare function createWela(dt?: Date, dtTimeZone?: timeZoneName): IWela;
export declare function nowInTimeZone(dtTimeZone: timeZoneName): IWela;
export declare function nowInUTC(): IWela;
export declare function nowInAsiaBangkok(): IWela;
export declare function convertWelaToTimeZone(wela: IWela, dtTimeZone?: timeZoneName): IWela;
export declare function convertWelaToSystem(wela: IWela): IWela;
export declare function convertWelaToUTC(wela: IWela): IWela;
export declare function convertWelaToAsiaBangkok(wela: IWela): IWela;
//# sourceMappingURL=index.d.ts.map