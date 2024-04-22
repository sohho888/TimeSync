import styles from './Modal.module.scss';
import { PropsWithChildren } from 'react';

interface ModalProps {
  h3: string;
  onClose: () => void;
  onCanсel: () => void;
  onSave: () => void;
}

export default function Modal(props: PropsWithChildren<ModalProps>) {
  return (
    <>
      <div
        className={styles.modalcontainer}
        onClick={(e) => {
          if (e.currentTarget.className === styles.modalcontainer) {
            e.stopPropagation();
            props.onClose();
          }
        }}
      >
        <div
          className={styles.modal}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className={styles.modalheader}>
            <h3>{props.h3}</h3>
            <p className={styles.close} onClick={() => props.onClose()}>
              &times;
            </p>
          </div>
          <div className={styles.modalcontent}>{props.children}</div>
          <div className={styles.modalfooter}>
            <button
              className={`${styles.btn} ${styles.btncancel}`}
              onClick={() => props.onCanсel()}
            >
              Cancel
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
