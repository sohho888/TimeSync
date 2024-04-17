import moment from 'moment';
import 'moment-timezone';

// const url = 'https://timesync.club/?ts=1712745573031&tz=Asia/Tokyo';

export default function targetTime(targetUrl: string): any {
  const dataParams = new URL(targetUrl);
  const timestamp = dataParams.searchParams.get('ts');
  const timezone = dataParams.searchParams.get('tz');

  let time = moment(Number(timestamp));

  //@ts-ignore
  let targetTime = time.tz(timezone);

  return targetTime;
}
