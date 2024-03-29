import Clock from './components/Clock';
import styles from './App.module.scss';

function App() {
  return (
    <>
      <div className = {styles.wrapper}>
        <h1 className = {styles.h1}>
          Secret meeting of the <span> Masons</span>
        </h1>
        <div className={styles.block}>
          <Clock time = {'20:06'} />
          <Clock time = {'07:46'} />
        </div>
      </div>
    </>
  );
}

export default App;
