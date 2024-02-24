import React, { useState } from 'react';

const CharacterCounter = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  let message = "";
  let apiClass = "";

  if (inputValue.length === 40) {
    message = "Régi API-kulcsot használsz, hozz létre egy újat!";
    apiClass = "api-nem-ok";
  } else if (inputValue.length === 42) {
    message = "Gratulálunk, az új kulcsot használod. :-)";
    apiClass = "api-ok";
  }

  return (
    <div className="api-key-checker">
      <input className="api-key-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Itt adhatod meg az API-kulcsodat."
      />
      {message && <p className={apiClass}>{message}</p>}
    </div>
  );
};

export default CharacterCounter;