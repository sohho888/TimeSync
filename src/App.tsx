import CreateEvent from './components/CreateEvent/CreateEvent';
import PageEvent from './components/ PageEvent/PageEvent';
import { parseUrl } from './utils';
import { Helmet } from 'react-helmet';

function App() {
  const { date, timezone, event } = parseUrl(window.location.href);

  return (
    <div>
    
      <Helmet>
        <title>Назначьте время события в любой таймзоне</title>
        <meta
          name="description"
          content="Выбирайте таймзоны, устанавливайте время и дату. Идеально подходит для бизнес-встреч, вебинаров и личных встреч."
        />
      </Helmet>
      {date && timezone ? (
        <PageEvent date={date} timezone={timezone} event={event} />
      ) : (
        <CreateEvent />
      )}
    </div>
  );
}

export default App;
