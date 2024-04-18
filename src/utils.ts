// const url = 'https://timesync.club/?ts=1712745573031&tz=Asia/Tokyo';

export function parseUrl(url: string) {
  return { date: new Date(), timezone: 'Europe/Lisbon' };
}

export function getCurrentTimezone(): string {
  return 'Asia/Tokyo';
}
