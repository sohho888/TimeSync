import CreateEvent from './components/CreateEvent/CreateEvent';
import PageEvent from './components/ PageEvent/PageEvent';
import { parseUrl } from './utils';
import styles from './App.module.scss';

function App() {
  const { date, timezone, event } = parseUrl(window.location.href);

  return (
    <div className={styles.wrapper}>
      {date && timezone ? <PageEvent date={date} timezone={timezone} event={event} /> : <CreateEvent />}
    </div>
  );
}

export default App;
