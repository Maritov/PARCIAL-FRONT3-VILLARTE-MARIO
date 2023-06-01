/* eslint-disable react/prop-types */
import '../stylesheet/card.css';


const Card = ({ nombre, equipo }) => {
  return (
    <div className="card">
      <p>hola: {nombre}</p>
      <p>Tu equippo es: {equipo}</p>
    </div>
  );
};

export default Card
