import './App.css';
import { Body } from './components/body/Body';
import hours from './helpers/hours';

function App() {
  return (
    <>
    <Body hours={hours} />

    </>
  );
}

export default App;
