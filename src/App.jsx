
import './App.css'
import Formulario from './components/Formulario'
import { useState } from 'react';
import Card from './components/Card'

const App = () => {
  const [nombre, setNombre] = useState("");
  const [equipo, setEquipo] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (nombre.trim().length < 3 || nombre.trim().startsWith(" ")) {
      setErrorMessage("Por favor chequea que la información sea correcta");
    } else if (equipo.length < 6) {
      setErrorMessage("Por favor chequea que la información sea correcta");
    } else {
      setErrorMessage("");
      setShowCard(true);
    }
  };

  return (
    <div className="app">
      <h1>DECIME TU EQUIPO</h1>
      <Formulario handleSubmit={handleSubmit} />
      {errorMessage && <p>{errorMessage}</p>}
      {showCard && <Card nombre={nombre} equipo={equipo} />}
    </div>
  );
};

export default App;