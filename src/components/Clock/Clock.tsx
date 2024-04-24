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
  // const [modalOpen, setModalOpen] = useState(false);

  // const handleButtonClick = () => {
  //   setModalOpen(false);
  // };

  return (
    <>
      <div className={styles.clockwrapper}>
        {/* <button className={styles.buttonclock} onClick={() => setModalOpen(true)}>
          {props.nameevent}
        </button>
        {modalOpen && (
          <Modal
            onSave={handleButtonClick}
            onCanсel={handleButtonClick}
            onClose={handleButtonClick}
            h3={'City to use as your default'}
          >
            <input type="text" id="nearbycity" name="nearbycity" />
            <label htmlFor="nearbycity">City to use as your default</label>
            <p className={styles.nearbycity}>
              <strong>Nearby: </strong>Lisboa | Madrid | Porto | Valensia
            </p>
          </Modal>
        )} */}
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
