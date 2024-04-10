// import { useState, useEffect } from 'react';
import styles from './Timeinfo.module.scss';

export function Timeinfo() {
  return (
    <>
      <div className={styles.information_wrap}>
        <div className={styles.clock_info}>
          <div className={styles.time_info}>new Date </div>
          <div className={styles.time_description}>to local time</div>
        </div>
        <div className={styles.location_info}>
          <div className={styles.city_info}>LONDON</div>
          <div className={styles.date_info}>26/03/2024</div>
        </div>
      </div>
    </>
  );
}
