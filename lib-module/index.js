export { timeZoneList, isCorrectTimeZoneName } from './timeZone';
export function getSystemTimeZone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
export function createWela(dt = new Date(), dtTimeZone) {
    return {
        systemTimeZone: getSystemTimeZone(),
        dt: new Date(dt),
        dtTimeZone: dtTimeZone ? dtTimeZone : getSystemTimeZone(),
    };
}
export function nowInTimeZone(dtTimeZone) {
    return createWela(new Date(new Date().toLocaleString('en-US', { timeZone: dtTimeZone })), dtTimeZone);
}
export function nowInUTC() {
    return nowInTimeZone('UTC');
}
export function nowInAsiaBangkok() {
    return nowInTimeZone('Asia/Bangkok');
}
export function convertWelaToTimeZone(wela, dtTimeZone) {
    const dtz = dtTimeZone ? nowInTimeZone(dtTimeZone).dt : createWela().dt;
    const now = nowInTimeZone(wela.dtTimeZone).dt;
    const diff = now.getTime() - dtz.getTime();
    return createWela(new Date(wela.dt.getTime() - diff));
}
export function convertWelaToSystem(wela) {
    return convertWelaToTimeZone(wela);
}
export function convertWelaToUTC(wela) {
    return convertWelaToTimeZone(wela, 'UTC');
}
export function convertWelaToAsiaBangkok(wela) {
    return convertWelaToTimeZone(wela, 'Asia/Bangkok');
}
//# sourceMappingURL=index.js.map