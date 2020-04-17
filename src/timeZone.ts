export type timeZoneName =
    | 'Africa/Abidjan'
    | 'Africa/Addis_Ababa'
    | 'Africa/Algiers'
    | 'Africa/Blantyre'
    | 'Africa/Cairo'
    | 'Africa/Windhoek'
    | 'America/Adak'
    | 'America/Anchorage'
    | 'America/Araguaina'
    | 'America/Argentina/Buenos_Aires'
    | 'America/Belize'
    | 'America/Bogota'
    | 'America/Campo_Grande'
    | 'America/Cancun'
    | 'America/Caracas'
    | 'America/Chicago'
    | 'America/Chihuahua'
    | 'America/Dawson_Creek'
    | 'America/Denver'
    | 'America/Ensenada'
    | 'America/Glace_Bay'
    | 'America/Godthab'
    | 'America/Goose_Bay'
    | 'America/Havana'
    | 'America/La_Paz'
    | 'America/Los_Angeles'
    | 'America/Miquelon'
    | 'America/Montevideo'
    | 'America/New_York'
    | 'America/Noronha'
    | 'America/Santiago'
    | 'America/Sao_Paulo'
    | 'America/St_Johns'
    | 'Asia/Anadyr'
    | 'Asia/Bangkok'
    | 'Asia/Beirut'
    | 'Asia/Damascus'
    | 'Asia/Dhaka'
    | 'Asia/Dubai'
    | 'Asia/Gaza'
    | 'Asia/Hong_Kong'
    | 'Asia/Irkutsk'
    | 'Asia/Jerusalem'
    | 'Asia/Kabul'
    | 'Asia/Katmandu'
    | 'Asia/Kolkata'
    | 'Asia/Krasnoyarsk'
    | 'Asia/Magadan'
    | 'Asia/Novosibirsk'
    | 'Asia/Rangoon'
    | 'Asia/Riyadh89'
    | 'Asia/Seoul'
    | 'Asia/Tashkent'
    | 'Asia/Tehran'
    | 'Asia/Tokyo'
    | 'Asia/Vladivostok'
    | 'Asia/Yakutsk'
    | 'Asia/Yekaterinburg'
    | 'Asia/Yerevan'
    | 'Atlantic/Azores'
    | 'Atlantic/Cape_Verde'
    | 'Atlantic/Stanley'
    | 'Australia/Adelaide'
    | 'Australia/Brisbane'
    | 'Australia/Darwin'
    | 'Australia/Eucla'
    | 'Australia/Hobart'
    | 'Australia/Lord_Howe'
    | 'Australia/Perth'
    | 'Chile/EasterIsland'
    | 'Etc/GMT+10'
    | 'Etc/GMT+12'
    | 'Etc/GMT+8'
    | 'Etc/GMT-11'
    | 'Etc/GMT-12'
    | 'Europe/Amsterdam'
    | 'Europe/Belfast'
    | 'Europe/Belgrade'
    | 'Europe/Brussels'
    | 'Europe/Dublin'
    | 'Europe/Lisbon'
    | 'Europe/London'
    | 'Europe/Minsk'
    | 'Europe/Moscow'
    | 'Pacific/Auckland'
    | 'Pacific/Chatham'
    | 'Pacific/Gambier'
    | 'Pacific/Kiritimati'
    | 'Pacific/Marquesas'
    | 'Pacific/Midway'
    | 'Pacific/Norfolk'
    | 'Pacific/Tongatapu'
    | 'UTC';

export const timeZoneList: {
    offset: string;
    name: timeZoneName;
}[] = [
    {
        offset: 'GMT-12:00',
        name: 'Etc/GMT-12',
    },
    {
        offset: 'GMT-11:00',
        name: 'Etc/GMT-11',
    },
    {
        offset: 'GMT-11:00',
        name: 'Pacific/Midway',
    },
    {
        offset: 'GMT-10:00',
        name: 'America/Adak',
    },
    {
        offset: 'GMT-09:00',
        name: 'America/Anchorage',
    },
    {
        offset: 'GMT-09:00',
        name: 'Pacific/Gambier',
    },
    {
        offset: 'GMT-08:00',
        name: 'America/Dawson_Creek',
    },
    {
        offset: 'GMT-08:00',
        name: 'America/Ensenada',
    },
    {
        offset: 'GMT-08:00',
        name: 'America/Los_Angeles',
    },
    {
        offset: 'GMT-07:00',
        name: 'America/Chihuahua',
    },
    {
        offset: 'GMT-07:00',
        name: 'America/Denver',
    },
    {
        offset: 'GMT-06:00',
        name: 'America/Belize',
    },
    {
        offset: 'GMT-06:00',
        name: 'America/Cancun',
    },
    {
        offset: 'GMT-06:00',
        name: 'America/Chicago',
    },
    {
        offset: 'GMT-06:00',
        name: 'Chile/EasterIsland',
    },
    {
        offset: 'GMT-05:00',
        name: 'America/Bogota',
    },
    {
        offset: 'GMT-05:00',
        name: 'America/Havana',
    },
    {
        offset: 'GMT-05:00',
        name: 'America/New_York',
    },
    {
        offset: 'GMT-04:30',
        name: 'America/Caracas',
    },
    {
        offset: 'GMT-04:00',
        name: 'America/Campo_Grande',
    },
    {
        offset: 'GMT-04:00',
        name: 'America/Glace_Bay',
    },
    {
        offset: 'GMT-04:00',
        name: 'America/Goose_Bay',
    },
    {
        offset: 'GMT-04:00',
        name: 'America/Santiago',
    },
    {
        offset: 'GMT-04:00',
        name: 'America/La_Paz',
    },
    {
        offset: 'GMT-03:00',
        name: 'America/Argentina/Buenos_Aires',
    },
    {
        offset: 'GMT-03:00',
        name: 'America/Montevideo',
    },
    {
        offset: 'GMT-03:00',
        name: 'America/Araguaina',
    },
    {
        offset: 'GMT-03:00',
        name: 'America/Godthab',
    },
    {
        offset: 'GMT-03:00',
        name: 'America/Miquelon',
    },
    {
        offset: 'GMT-03:00',
        name: 'America/Sao_Paulo',
    },
    {
        offset: 'GMT-03:30',
        name: 'America/St_Johns',
    },
    {
        offset: 'GMT-02:00',
        name: 'America/Noronha',
    },
    {
        offset: 'GMT-01:00',
        name: 'Atlantic/Cape_Verde',
    },
    {
        offset: 'GMT',
        name: 'Europe/Belfast',
    },
    {
        offset: 'GMT',
        name: 'Africa/Abidjan',
    },
    {
        offset: 'GMT',
        name: 'Europe/Dublin',
    },
    {
        offset: 'GMT',
        name: 'Europe/Lisbon',
    },
    {
        offset: 'GMT',
        name: 'Europe/London',
    },
    {
        offset: 'UTC',
        name: 'UTC',
    },
    {
        offset: 'GMT+01:00',
        name: 'Africa/Algiers',
    },
    {
        offset: 'GMT+01:00',
        name: 'Africa/Windhoek',
    },
    {
        offset: 'GMT+01:00',
        name: 'Atlantic/Azores',
    },
    {
        offset: 'GMT+01:00',
        name: 'Atlantic/Stanley',
    },
    {
        offset: 'GMT+01:00',
        name: 'Europe/Amsterdam',
    },
    {
        offset: 'GMT+01:00',
        name: 'Europe/Belgrade',
    },
    {
        offset: 'GMT+01:00',
        name: 'Europe/Brussels',
    },
    {
        offset: 'GMT+02:00',
        name: 'Africa/Cairo',
    },
    {
        offset: 'GMT+02:00',
        name: 'Africa/Blantyre',
    },
    {
        offset: 'GMT+02:00',
        name: 'Asia/Beirut',
    },
    {
        offset: 'GMT+02:00',
        name: 'Asia/Damascus',
    },
    {
        offset: 'GMT+02:00',
        name: 'Asia/Gaza',
    },
    {
        offset: 'GMT+02:00',
        name: 'Asia/Jerusalem',
    },
    {
        offset: 'GMT+03:00',
        name: 'Africa/Addis_Ababa',
    },
    {
        offset: 'GMT+03:00',
        name: 'Asia/Riyadh89',
    },
    {
        offset: 'GMT+03:00',
        name: 'Europe/Minsk',
    },
    {
        offset: 'GMT+03:30',
        name: 'Asia/Tehran',
    },
    {
        offset: 'GMT+04:00',
        name: 'Asia/Dubai',
    },
    {
        offset: 'GMT+04:00',
        name: 'Asia/Yerevan',
    },
    {
        offset: 'GMT+04:00',
        name: 'Europe/Moscow',
    },
    {
        offset: 'GMT+04:30',
        name: 'Asia/Kabul',
    },
    {
        offset: 'GMT+05:00',
        name: 'Asia/Tashkent',
    },
    {
        offset: 'GMT+05:30',
        name: 'Asia/Kolkata',
    },
    {
        offset: 'GMT+05:45',
        name: 'Asia/Katmandu',
    },
    {
        offset: 'GMT+06:00',
        name: 'Asia/Dhaka',
    },
    {
        offset: 'GMT+06:00',
        name: 'Asia/Yekaterinburg',
    },
    {
        offset: 'GMT+06:30',
        name: 'Asia/Rangoon',
    },
    {
        offset: 'GMT+07:00',
        name: 'Asia/Bangkok',
    },
    {
        offset: 'GMT+07:00',
        name: 'Asia/Novosibirsk',
    },
    {
        offset: 'GMT+08:00',
        name: 'Etc/GMT+8',
    },
    {
        offset: 'GMT+08:00',
        name: 'Asia/Hong_Kong',
    },
    {
        offset: 'GMT+08:00',
        name: 'Asia/Krasnoyarsk',
    },
    {
        offset: 'GMT+08:00',
        name: 'Australia/Perth',
    },
    {
        offset: 'GMT+08:45',
        name: 'Australia/Eucla',
    },
    {
        offset: 'GMT+09:00',
        name: 'Asia/Irkutsk',
    },
    {
        offset: 'GMT+09:00',
        name: 'Asia/Seoul',
    },
    {
        offset: 'GMT+09:00',
        name: 'Asia/Tokyo',
    },
    {
        offset: 'GMT+09:30',
        name: 'Australia/Adelaide',
    },
    {
        offset: 'GMT+09:30',
        name: 'Australia/Darwin',
    },
    {
        offset: 'GMT+09:30',
        name: 'Pacific/Marquesas',
    },
    {
        offset: 'GMT+10:00',
        name: 'Etc/GMT+10',
    },
    {
        offset: 'GMT+10:00',
        name: 'Australia/Brisbane',
    },
    {
        offset: 'GMT+10:00',
        name: 'Australia/Hobart',
    },
    {
        offset: 'GMT+10:00',
        name: 'Asia/Yakutsk',
    },
    {
        offset: 'GMT+10:30',
        name: 'Australia/Lord_Howe',
    },
    {
        offset: 'GMT+11:00',
        name: 'Asia/Vladivostok',
    },
    {
        offset: 'GMT+11:30',
        name: 'Pacific/Norfolk',
    },
    {
        offset: 'GMT+12:00',
        name: 'Etc/GMT+12',
    },
    {
        offset: 'GMT+12:00',
        name: 'Asia/Anadyr',
    },
    {
        offset: 'GMT+12:00',
        name: 'Asia/Magadan',
    },
    {
        offset: 'GMT+12:00',
        name: 'Pacific/Auckland',
    },
    {
        offset: 'GMT+12:45',
        name: 'Pacific/Chatham',
    },
    {
        offset: 'GMT+13:00',
        name: 'Pacific/Tongatapu',
    },
    {
        offset: 'GMT+14:00',
        name: 'Pacific/Kiritimati',
    },
];

export function isCorrectTimeZoneName(name: string): name is timeZoneName {
    return timeZoneList.map((t) => t.name).some((n) => n === name);
}
