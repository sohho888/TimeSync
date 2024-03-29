import styles from './Clock.module.scss';


// let h = document.querySelector('#hour');
// let m = document.querySelector('#min');
// let s = document.querySelector('#sec');

// setInterval(clock, 1000);

// function clock() {
//   let d = new Date();
//   let hh = d.getHours() * 30;
//   let mm = d.getMinutes() * 6;
//   let ss = d.getSeconds() * 6;

//   h.style.transform = `rotate(${hh}deg)`;
//   m.style.transform = `rotate(${mm}deg)`;
//   s.style.transform = `rotate(${ss}deg)`;
// }

export default function Clock(props: any) {
  return (
    <>
      <div className={styles.clockwrapper}>
        <div className={styles.clock}>
          <div id="hour" className={styles.hour}></div>
          <div id="min" className={styles.min}></div>
          <div id="sec" className={styles.sec}></div>
        </div>
        <div className={styles.time}>{props.time}</div>
      </div>
    </>
  );
}
