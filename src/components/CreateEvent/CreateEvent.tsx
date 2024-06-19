import { useState } from 'react';
import moment from 'moment-timezone';
import styles from './CreateEvent.module.scss';

function CreateEvent() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('00:00');
  const [generatedUrl, setGeneratedUrl] = useState('');
  const [error, setError] = useState('');

  const handleGenerateUrl = () => {
    if (!eventName || !eventDate || !eventTime) {
      setError('Пожалуйста, заполните все поля.');
      return;
    }
    const dateTime = moment.tz(`${eventDate} ${eventTime}`, moment.tz.guess());
    if (!dateTime.isValid()) {
      setError('Неверный формат даты или времени.');
      return;
    }

    const timestamp = dateTime.valueOf();
    const timezone = moment.tz.guess();
    const url = `${
      window.location.href
    } /?ts=${timestamp}&tz=${timezone}&event=${encodeURIComponent(eventName)}`;
    setGeneratedUrl(url);
    setError('');
  };

  return (
    <>
      <h1>Создание события</h1>
      <div className={styles.formcontainer}>
        {error && <p className={styles.error}>{error}</p>}
        <h3 className={styles.formheader}> {eventName}</h3>
        <div className={styles.inputwrapper}>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            placeholder="Название события"
            className={styles.inputfield}
          />
          <input
            type="date"
            className={styles.inputfield}
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
          <input
            className={styles.inputfield}
            type="time"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
          />
        </div>
        <button className={styles.submitbutton} onClick={handleGenerateUrl}>
          Сформировать ссылку
        </button>
        {generatedUrl && (
          <div className={styles.linkdisplay}>
            <p>
              Ссылка на событие:{' '}
              <a href={generatedUrl} target="_blank">
                {generatedUrl}
              </a>
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default CreateEvent;
