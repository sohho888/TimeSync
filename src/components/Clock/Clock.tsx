import { useState, useEffect } from 'react';
import styles from './Clock.module.scss';
import Timeinfo from '../Timeinfo/Timeinfo';

interface ClockProps {
  time: Date;
  tz: string;
  difftime: string;
}

enum ClockHand {
  hh,
  mm,
  ss,
}

const getDegreeByDate = (time: Date, hande: ClockHand): number => {
  if (hande === ClockHand.hh) {
    return time.getHours() * 30;
  }
  if (hande === ClockHand.mm) {
    return time.getMinutes() * 6;
  }
  if (hande === ClockHand.ss) {
    return time.getSeconds() * 6;
  }
  return 0;
};

export default function Clock(props: ClockProps) {
  const [time, setTime] = useState(props.time);
  const [tz] = useState(props.tz);
  const [difftime] = useState(props.difftime);

  useEffect(() => {
    setTimeout(() => {
      document.title = `You clicked ${time} times`;
      setTime((t) => {
        let t2 = t.setSeconds(t.getSeconds() + 1);
        return new Date(t2);
      });
    }, 1000);
  }, [time]);

  return (
    <>
      <div className={styles.clockwrapper}>
        <div className={styles.clock}>
          <ClockFace />
          <div
            style={{ transform: `rotate(${getDegreeByDate(time, ClockHand.hh)}deg)` }}
            className={styles.hour}
          ></div>
          <div
            style={{ transform: `rotate(${getDegreeByDate(time, ClockHand.mm)}deg)` }}
            className={styles.min}
          ></div>
          <div
            style={{ transform: `rotate(${getDegreeByDate(time, ClockHand.ss)}deg)` }}
            className={styles.sec}
          ></div>
        </div>
        <Timeinfo time={time} tz={tz} difftime={difftime} />
      </div>
    </>
  );
}

function ClockFace() {
  return (
    <div className={styles.face}>
      {Array.from({ length: 60 }).map((_, index) => {
        return (
          <div key={index} className={styles.mark} style={{ transform: `rotate(${index * 6}deg)` }}>
            <div className={`${styles.body} ${styles.minuteBody}`}></div>
          </div>
        );
      })}
      {Array.from({ length: 12 }).map((_, index) => {
        return (
          <div className={styles.mark} style={{ transform: `rotate(${index * 30}deg)` }}>
            <div className={`${styles.body} ${styles.hourBody}`}></div>
          </div>
        );
      })}
    </div>
  );
}
