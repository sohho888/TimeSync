import styles from './Timeinfo.module.scss';
import moment, { Moment } from 'moment';
import 'moment-timezone';

interface INewDate {
  time: Moment;
  tz: string;
  difftime: string;
}

export default function Timeinfo(props: INewDate) {
  const formattedTime = moment(props.time).tz(props.tz).format('dddd, MMMM Do YYYY, h:mm:ss a');
  const formattedDate = moment(props.time).format('DD/MM/YYYY');

  return (
    <>
      <div className={styles.information_wrap}>
        <div className={styles.clock_info}>
          <div className={styles.time_info}>{formattedTime}</div>
          <div className={styles.time_description}>{props.difftime} local time</div>
        </div>
        <div className={styles.location_info}>
          <div className={styles.city_info}>{props.tz}</div>
          <div className={styles.date_info}>{formattedDate}</div>
        </div>
      </div>
    </>
  );
}
