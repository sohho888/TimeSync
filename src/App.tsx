import { useState, PropsWithChildren } from 'react';
import Clock from './components/Clock/Clock';
import styles from './App.module.scss';
import { parseUrl, getCurrentTimezone } from './utils';
import Modal from './components/Modal/Modal';
import Timeinfo from './components/Timeinfo/Timeinfo';
import Setevent from './components/Setevent/Setevent';
import { timezones } from './components/FuzzySearch/timezones';

type AppProps = PropsWithChildren<{}>;

function App({ children }: AppProps) {
  const { date, timezone } = parseUrl(window.location.href);
  const [selectedTimezone, setSelectedTimezone] = useState<string>('');
  const [savedTimezone, setSavedTimezone] = useState<string>(timezone);

  const handleTimezoneChange = (value: string) => {
    setSelectedTimezone(value);
  };

  const handleSave = () => {
    setSavedTimezone(selectedTimezone);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>
        Secret meeting of the <span> Masons</span>
      </h1>
      <div className={styles.block}>
        <Setevent
          header={<Timeinfo time={date} tz={timezone} difftime="Event" />}
          footer={<Clock time={date} tz={timezone} />}
        />

        <Setevent
          header={<Timeinfo time={date} tz={savedTimezone} difftime="My" />}
          footer={
            <Modal
              onSave={handleSave}
              h3="City to use as your default"
              nameevent="Is your location chosen correctly?"
              selectedTimezone={selectedTimezone}
              onChange={handleTimezoneChange}
              options={timezones}
            >
              {children}
            </Modal>
          }
        >
          <Clock time={date} tz={getCurrentTimezone()} />
        </Setevent>
      </div>
    </div>
  );
}

export default App;
