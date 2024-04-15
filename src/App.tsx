import Clock from './components/Clock/Clock';
import styles from './App.module.scss';
import targetTime from './utils';

function App() {
  const urlCurrent = window.location.href;
  const clientTtimeStamp = new Date().getTime();
  const clientTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const urlClient = `${urlCurrent}/?ts=${clientTtimeStamp}&tz=${clientTimeZone}`;

  console.log(urlClient);

  // console.log(`Ссылка: ${urlCurrent}/?ts=${clientTtimeStamp}tz=${clientTimeZone} `);
  // const url = 'https://timesync.club/?ts=1712745573031&tz=Asia/Tokyo';

  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>
          Secret meeting of the <span> Masons</span>
        </h1>
        <div className={styles.block}>
          <Clock time={new Date(targetTime(urlClient))} />
          <Clock time={new Date()} />
        </div>
      </div>
    </>
  );
}

export default App;
