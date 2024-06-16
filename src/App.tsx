import CreateEvent from './components/CreateEvent/CreateEvent';
import PageEvent from './components/ PageEvent/PageEvent';
import { parseUrl } from './utils';
import styles from './App.module.scss';

function App() {
  const { date, timezone } = parseUrl(window.location.href);

  return (
    <div className={styles.wrapper}>
      {date && timezone ? <PageEvent eventUrl={window.location.href} /> : <CreateEvent />}
    </div>
  );
}

export default App;
