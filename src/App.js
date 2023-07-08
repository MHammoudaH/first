
import Header from './Header.js';
import WorkerForm from './WorkerForm';
import ClockStatus from './ClockStatus';
import ClockButtons from './ClockButtons';
import TimeDisplay from './TimeDisplay';

function App() {
  return (
    <div className="app">
      <Header />
      <WorkerForm />
      <ClockStatus />
      <ClockButtons />
      <TimeDisplay />
    </div>
  );
}

export default App;
