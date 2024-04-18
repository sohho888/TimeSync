import styles from './Timeinfo.module.scss';
import { useState } from 'react';
import moment from 'moment';
import 'moment-timezone';

interface INewDate {
  time: Date;
  tz: string;
  difftime: string;
}
export default function Timeinfo(props: INewDate) {
  const [time] = useState(props.time);
  const [tz] = useState(props.tz);
  const [difftime] = useState(props.difftime);

  return (
    <>
      <div className={styles.information_wrap}>
        <div className={styles.clock_info}>
          <div className={styles.time_info}>
            {' '}
            {moment(time).tz(tz).format('dddd, MMMM Do YYYY, h:mm:ss a')}
          </div>
          <div className={styles.time_description}>{difftime} local time</div>
        </div>
        <div className={styles.location_info}>
          <div className={styles.city_info}>{tz}</div>
          <div className={styles.date_info}>{moment(time).format('DD/MM/YYYY')}</div>
        </div>
      </div>
    </>
  );
}
