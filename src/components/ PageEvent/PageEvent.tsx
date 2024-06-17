import { useState } from 'react';
import Clock from '../Clock/Clock';
import styles from './PageEvent.module.scss';
import { getCurrentTimezone } from '../../utils';
import Modal from '../Modal/Modal';
import Timeinfo from '../Timeinfo/Timeinfo';
import Setevent from '../Setevent/Setevent';
import FuzzySearch from '../FuzzySearch/FuzzySearch';
import { timezones } from '../FuzzySearch/timezones';
import { Moment } from 'moment';

interface PageEventProps {
  date: Moment;
  timezone: string;
  event: any;
}

function PageEvent({ date, timezone, event }: PageEventProps) {
  const decodedEventName = decodeURIComponent(event || '');

  const [selectedTimezone, setSelectedTimezone] = useState<string>(
    timezone || getCurrentTimezone(),
  );
  const [savedTimezone, setSavedTimezone] = useState<string>(timezone || getCurrentTimezone());

  const handleTimezoneChange = (value: string) => {
    setSelectedTimezone(value);
  };

  const handleSave = () => {
    setSavedTimezone(selectedTimezone);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>
        <span>Event: </span> {decodedEventName || 'Unknown event'}
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
            >
              {<FuzzySearch options={timezones} onChange={handleTimezoneChange} />}
            </Modal>
          }
        >
          <Clock time={date} tz={getCurrentTimezone()} />
        </Setevent>
      </div>
    </div>
  );
}

export default PageEvent;
