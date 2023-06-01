/* eslint-disable react/prop-types */

import { useState } from 'react';






const Formulario = ({ handleSubmit }) => {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
  
    const handleInputChange = (e, setInput) => {
      setInput(e.target.value);
    };
  
    return (
      <form>
        <label>
          Input 1:
          <input
            type="text"
            value={input1}
            onChange={(e) => handleInputChange(e, setInput1)}
          />
        </label>
        <br />
        <label>
          Input 2:
          <input
            type="text"
            value={input2}
            onChange={(e) => handleInputChange(e, setInput2)}
          />
        </label>
        <br />
        <button type="submit" onClick={handleSubmit}>
          Enviar
        </button>
      </form>
    );
  };

  export default Formulario









