import styles from './Clock.module.scss';
import Timeinfo from '../Timeinfo/Timeinfo';
import { Moment } from 'moment';
import 'moment-timezone';
import Modal from '../Modal/Modal';
import { useState } from 'react';

interface ClockProps {
  time: Moment;
  tz: string;
  difftime: string;
  nameevent: string;
}

enum ClockHand {
  hh,
  mm,
  ss,
}

const getDegreeByDate = (m: Moment, hande: ClockHand): number => {
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
  const [modalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className={styles.clockwrapper}>
        <button className={styles.buttonclock} onClick={() => setModalOpen(true)}>
          {props.nameevent}
        </button>
        {modalOpen && (
          <Modal
            onSave={handleButtonClick}
            onCansel={handleButtonClick}
            onClose={handleButtonClick}
          />
        )}
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
        <Timeinfo time={props.time} tz={props.tz} difftime={props.difftime} />
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
