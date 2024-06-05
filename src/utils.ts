// const url = 'https://timesync.club/?ts=1712745573031&tz=Asia/Tokyo';

import moment from 'moment';

export function parseUrl(url: string) {
  const urlEvent = new URL(url);
  const timezone = urlEvent.searchParams.get('tz')!;
  const timestamp = urlEvent.searchParams.get('ts')!;
  console.log(timezone, timestamp);

  return { date: moment(Number(timestamp)), timezone };
}

export function getCurrentTimezone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
