import Clock from './components/Clock/Clock';
import styles from './App.module.scss';
// import targetTime from './utils';

function App() {
  // const clientUrl = 'http://localhost:5173/?ts=1618598453&tz=Europa/Moscow';

  // const today = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');

  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>
          Secret meeting of the <span> Masons</span>
        </h1>
        <div className={styles.block}>
          <Clock time={new Date() } />
          <Clock time={new Date()} />
        </div>
      </div>
    </>
  );
}

export default App;
