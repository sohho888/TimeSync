import styles from './Timeinfo.module.scss';
import { useEffect, useState } from 'react';

interface INewDate {
  time: Date;
}

export default function Timeinfo(props: INewDate) {
  const [time, setTime] = useState(props.time);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? 'PM' : 'AM';

    return `${padZero(hours)} : ${padZero(minutes)}: ${padZero(seconds)} ${meridiem}`;
  }

  function padZero(number:any){
    return (number < 10 ? "0" : " ") + number;
  }

  return (
    <>
      <div className={styles.information_wrap}>
        <div className={styles.clock_info}>
          <div className={styles.time_info}>{formatTime()}</div>
          <div className={styles.time_description}>Organizers local time</div>
        </div>
        <div className={styles.location_info}>
          <div className={styles.city_info}>LONDON</div>
          <div className={styles.date_info}>26/03/2024</div>
        </div>
      </div>
    </>
  );
}
