import styles from './Modal.module.scss';

export default function Modal(props: any) {
  return (
    <>
      <div className={styles.modalcontainer}>
        <div className={styles.modal}>
          <div className={styles.modalheader}>
            <h3>Select your home location</h3>
            <p className={styles.close} onClick={() => props.onClose()}>
              &times;
            </p>
          </div>
          <div className={styles.modalcontent}>
            <input type="text" />
            <label>City to use as your default</label>
            <p className={styles.nearbysity}>
              <strong>Nearby: </strong>Lisboa | Madrid | Porto | Valensia
            </p>
          </div>
          <div className={styles.modalfooter}>
            <button
              className={`${styles.btn} ${styles.btncansel}`}
              onClick={() => props.onCansel()}
            >
              Cansel
            </button>
            <button className={`${styles.btn} ${styles.btnsave}`} onClick={() => props.onSave()}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
