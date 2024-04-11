import Clock from './components/Clock/Clock';
import styles from './App.module.scss';

function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>
          Secret meeting of the <span> Masons</span>
        </h1>
        <div className={styles.block}>
          <Clock time={new Date()} />
          <Clock time={new Date()} />
        </div>
      </div>
    </>
  );
}

export default App;
