import './App.css';
import { Body } from './components/body/Body';
import hours from './helpers/hours';

function App() {
  const hora = "8:00 AM";
  const clase = "Matemáticas";
  const aula = "A-305";
  const profesor = "Juan Pérez";
  
  return (
    <div className="App">
    <Body hours={hours} />
    <div className="info-container">
      <h3>Información general:</h3>
      <p>Hora: {hora}</p>
      <p>Clase: {clase}</p>
      <p>Aula: {aula}</p>
      <p>Profesor: {profesor}</p>
    </div>
  </div>
  );
}

export default App;
