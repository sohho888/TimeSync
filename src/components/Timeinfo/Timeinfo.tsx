import styles from './Timeinfo.module.scss';
import { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment-timezone';

interface INewDate {
  time: Date;
}
export default function Timeinfo(props: INewDate) {
  const [time, setTime] = useState(props.time);

  const today = moment(time).format('dddd, MMMM Do YYYY, h:mm:ss a');

  useEffect(() => {
    setTimeout(() => {
      setTime((t) => {
        let t2 = t.setSeconds(t.getSeconds() + 1);
        return new Date(t2);
      });
    }, 1000);
  }, [time]);

  return (
    <>
      <div className={styles.information_wrap}>
        <div className={styles.clock_info}>
          <div className={styles.time_info}> {today}</div>
          <div className={styles.time_description}>Organizers local time</div>
        </div>
        <div className={styles.location_info}>
          <div className={styles.city_info}>London</div>
          <div className={styles.date_info}>26/03/2024 </div>
        </div>
      </div>
    </>
  );
}
