import Clock from './components/Clock/Clock';
import styles from './App.module.scss';
import { parseUrl, getCurrentTimezone } from './utils';

function App() {
  const { date, timezone } = parseUrl(window.location.href);

  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>
          Secret meeting of the <span> Masons</span>
        </h1>
        <div className={styles.block}>
          <Clock time={date} tz={timezone} difftime={'Your'} nameevent={'Select Event Location'} />
          <Clock
            time={date}
            tz={getCurrentTimezone()}
            difftime={'My'}
            nameevent={'Choose Your Location'}
          />
          {/* {modalOpen && <Modal />} */}
        </div>
      </div>
    </>
  );
}

export default App;
