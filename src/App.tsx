import Clock from './components/Clock/Clock';
import styles from './App.module.scss';
import { parseUrl, getCurrentTimezone } from './utils';
import Modal from './components/Modal/Modal';
import Timeinfo from './components/Timeinfo/Timeinfo';
import Setevent from './components/Setevent/Setevent';

function App() {
  const { date, timezone } = parseUrl(window.location.href);

  function handleButtonClick(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>
          Secret meeting of the <span> Masons</span>
        </h1>
        <div className={styles.block}>
          <Setevent
            header={
              <Modal
                onSave={handleButtonClick}
                h3={'City to use as your default'}
                nameevent={'Select Event Location'}
              />
            }
            footer={<Timeinfo time={date} tz={timezone} difftime={'Your'} />}
          >
            <Clock time={date} tz={timezone} />
          </Setevent>
          <Setevent
            header={
              <Modal
                onSave={handleButtonClick}
                h3={'City to use as your default'}
                nameevent={'Choose Your Location'}
              />
            }
            footer={<Timeinfo time={date} tz={timezone} difftime={'My'} />}
          >
            <Clock time={date} tz={getCurrentTimezone()} />
          </Setevent>
        </div>
      </div>
    </>
  );
}

export default App;
