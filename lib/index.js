"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timeZone_1 = require("./timeZone");
exports.timeZoneList = timeZone_1.timeZoneList;
exports.isCorrectTimeZoneName = timeZone_1.isCorrectTimeZoneName;
function getSystemTimeZone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
exports.getSystemTimeZone = getSystemTimeZone;
function createWela(dt = new Date(), dtTimeZone) {
    return {
        systemTimeZone: getSystemTimeZone(),
        dt: new Date(dt),
        dtTimeZone: dtTimeZone ? dtTimeZone : getSystemTimeZone(),
    };
}
exports.createWela = createWela;
function nowInTimeZone(dtTimeZone) {
    return createWela(new Date(new Date().toLocaleString('en-US', { timeZone: dtTimeZone })), dtTimeZone);
}
exports.nowInTimeZone = nowInTimeZone;
function nowInUTC() {
    return nowInTimeZone('UTC');
}
exports.nowInUTC = nowInUTC;
function nowInAsiaBangkok() {
    return nowInTimeZone('Asia/Bangkok');
}
exports.nowInAsiaBangkok = nowInAsiaBangkok;
function convertWelaToTimeZone(wela, dtTimeZone) {
    const dtz = dtTimeZone ? nowInTimeZone(dtTimeZone).dt : createWela().dt;
    const now = nowInTimeZone(wela.dtTimeZone).dt;
    const diff = now.getTime() - dtz.getTime();
    return createWela(new Date(wela.dt.getTime() - diff));
}
exports.convertWelaToTimeZone = convertWelaToTimeZone;
function convertWelaToSystem(wela) {
    return convertWelaToTimeZone(wela);
}
exports.convertWelaToSystem = convertWelaToSystem;
function convertWelaToUTC(wela) {
    return convertWelaToTimeZone(wela, 'UTC');
}
exports.convertWelaToUTC = convertWelaToUTC;
function convertWelaToAsiaBangkok(wela) {
    return convertWelaToTimeZone(wela, 'Asia/Bangkok');
}
exports.convertWelaToAsiaBangkok = convertWelaToAsiaBangkok;
//# sourceMappingURL=index.js.map