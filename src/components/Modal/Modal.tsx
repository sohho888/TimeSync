import { PropsWithChildren, useState } from 'react';
import FuzzySearch from '../FuzzySearch/FuzzySearch';
import { timezones } from '../FuzzySearch/timezones';
import styles from './Modal.module.scss';

interface ModalProps {
  h3: string;
  onSave: () => void;
  nameevent: string;
}

export default function Modal(props: PropsWithChildren<ModalProps>) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTimezone, setSelectedTimezone] = useState<string>('');

  const handleTimezoneChange = (value: string) => {
    setSelectedTimezone(value);
    console.log('Selected timezone:', value);
  };

  return (
    <>
      <button className={styles.buttonclock} onClick={() => setModalOpen(true)}>
        {props.nameevent}
      </button>

      {modalOpen && (
        <div
          className={styles.modalcontainer}
          onClick={() => {
            {
              setModalOpen(false);
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
              <p className={styles.close} onClick={() => setModalOpen(false)}>
                &times;
              </p>
            </div>

            <div className={styles.modalcontent}>
              <FuzzySearch options={timezones} onChange={handleTimezoneChange} />
              {selectedTimezone && (
                <p>
                  <strong>Selected city to use as your default: </strong>
                  {selectedTimezone}
                </p>
              )}

              <p className={styles.nearbycity}>
                <strong>Nearby: </strong>Lisboa | Madrid | Porto | Valensia
              </p>
            </div>

            <div className={styles.modalfooter}>
              <button
                className={`${styles.btn} ${styles.btncancel}`}
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
              <button className={`${styles.btn} ${styles.btnsave}`} onClick={() => props.onSave()}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
