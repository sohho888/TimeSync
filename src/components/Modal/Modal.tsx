import styles from './Modal.module.scss';

interface ModalProps {
  h3: string;
  onClose: () => void;
  onCanсel: () => void;
  onSave: () => void;
}

export default function Modal(props: ModalProps) {
  return (
    <>
      <div className={styles.modalcontainer}>
        <div className={styles.modal}>
          <div className={styles.modalheader}>
            <h3>{props.h3}</h3>
            <p className={styles.close} onClick={() => props.onClose()}>
              &times;
            </p>
          </div>
          <div className={styles.modalcontent}>
            <input type="text" id="nearbycity" name="nearbycity" />
            <label htmlFor="nearbycity">City to use as your default</label>
            <p className={styles.nearbycity}>
              <strong>Nearby: </strong>Lisboa | Madrid | Porto | Valensia
            </p>
          </div>
          <div className={styles.modalfooter}>
            <button
              className={`${styles.btn} ${styles.btncancel}`}
              onClick={() => props.onCanсel()}
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
