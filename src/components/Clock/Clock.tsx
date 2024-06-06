import styles from './Clock.module.scss';
import { Moment } from 'moment';
import 'moment-timezone';

interface ClockProps {
  time: Moment;
  tz: string;
}

enum ClockHand {
  hh,
  mm,
  ss,
}

const getDegreeByDate = (m: Moment, hand: ClockHand): number => {
  if (hand === ClockHand.hh) {
    return m.hours() * 30;
  }
  if (hand === ClockHand.mm) {
    return m.minute() * 6;
  }
  if (hand === ClockHand.ss) {
    return m.second() * 6;
  }
  return 0;
};

export default function Clock(props: ClockProps) {
  return (
    <>
      <div className={styles.clockwrapper}>
        <div className={styles.clock}>
          <ClockFace />
          <div
            style={{
              transform: `rotate(${getDegreeByDate(props.time.tz(props.tz), ClockHand.hh)}deg)`,
            }}
            className={styles.hour}
          ></div>

          <div
            style={{
              transform: `rotate(${getDegreeByDate(props.time.tz(props.tz), ClockHand.mm)}deg)`,
            }}
            className={styles.min}
          ></div>

          <div
            style={{
              transform: `rotate(${getDegreeByDate(props.time.tz(props.tz), ClockHand.ss)}deg)`,
            }}
            className={styles.sec}
          ></div>
        </div>
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
          <div
            key={index}
            className={styles.mark}
            style={{ transform: `rotate(${index * 30}deg)` }}
          >
            <div className={`${styles.body} ${styles.hourBody}`}></div>
          </div>
        );
      })}
    </div>
  );
}
