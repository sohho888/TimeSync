import styles from './App.module.scss';
import { parseUrl, getCurrentTimezone } from './utils';
import TimezoneSelector from './components/TimezoneSelector/TimezoneSelector';
import moment from 'moment';

function App() {
  const { date, timezone } = parseUrl(window.location.href);
  const parsedDate = moment(date); 
  console.log(parsedDate);
  

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>
        Secret meeting of the <span>Masons</span>
      </h1>
      <div className={styles.block}>
        <TimezoneSelector
          eventTitle="Select Event Location"
          initialTimezone={timezone}
          currentTime={parsedDate}
          difftime="Your"
        />
        <TimezoneSelector
          eventTitle="Choose Your Location"
          initialTimezone={getCurrentTimezone()}
          currentTime={parsedDate}
          difftime="My"
        />
      </div>
    </div>
  );
}

export default App;
