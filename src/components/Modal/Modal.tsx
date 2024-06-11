import { PropsWithChildren, useState } from 'react';
import FuzzySearch from '../FuzzySearch/FuzzySearch';
import styles from './Modal.module.scss';

interface ModalProps {
  h3: string;
  onSave: () => void;
  nameevent: string;
  options: string[];
  onChange: (value: string) => void;
  selectedTimezone: string;
}

export default function Modal(props: PropsWithChildren<ModalProps>) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleTimezoneChange = (value: string) => {
    props.onChange(value);
  };

  const handleSave = () => {
    props.onSave();
    setModalOpen(false);
  };

  return (
    <>
      <button className={styles.buttonclock} onClick={() => setModalOpen(true)}>
        {props.nameevent}
      </button>

      {modalOpen && (
        <div className={styles.modalcontainer} onClick={() => setModalOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalheader}>
              <h3>{props.h3}</h3>
              <p className={styles.close} onClick={() => setModalOpen(false)}>
                &times;
              </p>
            </div>

            <div className={styles.modalcontent}>
              {props.children}
              {props.selectedTimezone && (
                <p>
                  <strong>Selected city to use as your default: </strong>
                  {props.selectedTimezone}
                </p>
              )}
            </div>

            <div className={styles.modalfooter}>
              <button
                className={`${styles.btn} ${styles.btncancel}`}
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
              <button className={`${styles.btn} ${styles.btnsave}`} onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
