import { useState } from 'react';
import Clock from '../Clock/Clock';
import styles from '../TimeZoneEvent.module.scss';
import { parseUrl, getCurrentTimezone } from '../../utils';
import Modal from '../Modal/Modal';
import Timeinfo from '../Timeinfo/Timeinfo';
import Setevent from '../Setevent/Setevent';
import FuzzySearch from '../FuzzySearch/FuzzySearch';
import { timezones } from '../FuzzySearch/timezones';

function TimeZoneEvent() {
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
          footer={<Clock time={date} tz={getCurrentTimezone()} />}
        />
        <Setevent
          header={<Timeinfo time={date} tz={savedTimezone} difftime="My" />}
          footer={
            <>
              <Clock time={date} tz={getCurrentTimezone()} />
              <Modal
                onSave={handleSave}
                h3="City to use as your default"
                nameevent="Is your location chosen correctly?"
                selectedTimezone={selectedTimezone}
                onChange={handleTimezoneChange}
                options={timezones}
              >
                <FuzzySearch options={timezones} onChange={handleTimezoneChange} />
              </Modal>
            </>
          }
        />
      </div>
    </div>
  );
}

export default TimeZoneEvent;
