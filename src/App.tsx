import Clock from './components/Clock/Clock';
import styles from './App.module.scss';
import { parseUrl, getCurrentTimezone } from './utils';

function App() {
  // const clientUrl = 'http://localhost:5173/?ts=1618598453&tz=Europa/Moscow';

  // const today = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');

  const { date, timezone } = parseUrl(window.location.href);

  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>
          Secret meeting of the <span> Masons</span>
        </h1>
        <div className={styles.block}>
          <Clock time={date} tz={timezone} difftime={'Your'} />
          <Clock time={date} tz={getCurrentTimezone()} difftime={'My'} />
        </div>
      </div>
    </>
  );
}

export default App;
