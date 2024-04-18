import { useState, useEffect } from 'react';
import styles from './Clock.module.scss';
import Timeinfo from '../Timeinfo/Timeinfo';
import moment from 'moment';
import 'moment-timezone';

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

const getDegreeByDate = (m: any, hande: ClockHand): number => {
  if (hande === ClockHand.hh) {
    return m.hours() * 30;
  }
  if (hande === ClockHand.mm) {
    return m.minute() * 6;
  }
  if (hande === ClockHand.ss) {
    return m.second() * 6;
  }
  return 0;
};

export default function Clock(props: ClockProps) {
  const [time] = useState(props.time);
  const [tz] = useState(props.tz);
  const [difftime] = useState(props.difftime);

  return (
    <>
      <div className={styles.clockwrapper}>
        <div className={styles.clock}>
          <ClockFace />
          <div
            style={{ transform: `rotate(${getDegreeByDate(moment(time).tz(tz), ClockHand.hh)}deg)` }}
            className={styles.hour}
          ></div>
          <div
            style={{ transform: `rotate(${getDegreeByDate(moment(time).tz(tz), ClockHand.mm)}deg)` }}
            className={styles.min}
          ></div>
          <div
            style={{ transform: `rotate(${getDegreeByDate(moment(time).tz(tz), ClockHand.ss)}deg)` }}
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
