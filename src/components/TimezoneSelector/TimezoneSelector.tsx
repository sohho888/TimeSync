import { useState } from 'react';
import Modal from '../Modal/Modal';
import { timezones } from '../FuzzySearch/timezones';
import Timeinfo from '../Timeinfo/Timeinfo';
import Clock from '../Clock/Clock';
import Setevent from '../Setevent/Setevent';

interface TimezoneSelectorProps {
  eventTitle: string;
  initialTimezone: string;
  currentTime: moment.Moment;
  difftime: string;
}

const TimezoneSelector = ({
  eventTitle,
  initialTimezone,
  currentTime,
  difftime,
}: TimezoneSelectorProps) => {
  const [selectedTimezone, setSelectedTimezone] = useState<string>('');
  const [savedTimezone, setSavedTimezone] = useState<string>(initialTimezone);

  const handleTimezoneChange = (value: string) => {
    setSelectedTimezone(value);
  };

  const handleSave = () => {
    setSavedTimezone(selectedTimezone);
  };

  return (
    <Setevent
      header={
        <Modal
          onSave={handleSave}
          h3={'City to use as your default'}
          nameevent={eventTitle}
          options={timezones}
          onChange={handleTimezoneChange}
          selectedTimezone={selectedTimezone}
        />
      }
      footer={<Timeinfo time={currentTime} tz={savedTimezone} difftime={difftime} />}
    >
      <Clock time={currentTime} tz={savedTimezone} />
    </Setevent>
  );
};

export default TimezoneSelector;
