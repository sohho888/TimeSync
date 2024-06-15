import { useState } from 'react';
import PageEvent from './components/ PageEvent/PageEvent';
import moment from 'moment-timezone';

function App() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [generatedUrl, setGeneratedUrl] = useState('');

  const handleGenerateUrl = () => {
    const timestamp = moment.tz(`${eventDate} ${eventTime}`, moment.tz.guess()).valueOf();
    const timezone = moment.tz.guess();
    const url = `http://url/?ts=${timestamp}&tz=${timezone}&event=${encodeURIComponent(eventName)}`;
    setGeneratedUrl(url);
  };

  return (
    <div>
      <h1>Создание события</h1>
      <input
        type="text"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        placeholder="Название события"
      />
      <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
      <input type="time" value={eventTime} onChange={(e) => setEventTime(e.target.value)} />
      <button onClick={handleGenerateUrl}>Сформировать ссылку</button>
      {generatedUrl && (
        <div>
          <p>
            Ссылка на событие: <a href={generatedUrl}>{generatedUrl}</a>
          </p>
        </div>
      )}
      <PageEvent eventUrl={generatedUrl} />
    </div>
  );
}

export default App;
