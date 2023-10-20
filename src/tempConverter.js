import React, { useState } from 'react';
import './tempConverter.css';
import { FaTemperatureHigh } from 'react-icons/fa';


function TemperatureConverter() {
  const [celsius, setCelsiusValue] = useState('');
  const [fahrenheit, setFahrenheitValue] = useState('');

  const convertDegrees = (value) => {
    const converted = (value * 9/5) + 32;
    setFahrenheitValue(converted || '');
  };
  

  return (
    <div className='temperature'>
        <h3 className="title">Celsius to Fahrenheit Temperature Converter </h3>
        <h2 className="icon"><FaTemperatureHigh size={100} /> </h2>
        <label>
        Degrees C:   
        <input
          type="number"
          value={celsius}
          onChange={(e) => setCelsiusValue(e.target.value)}
          onBlur={(e) => convertDegrees(e.target.value)}
        />
      </label>
      <br></br>
      <br></br>
      <label>
        Degrees F:   
        <input
          type="number"
          value={fahrenheit}
          onChange={(e) => setFahrenheitValue(e.target.value)}
          onBlur={(e) => {
            const converted = (e.target.value - 32) * 5/9;
            setCelsiusValue(converted || '');
          }}
        />
      </label>
    </div>
  );
}

export default TemperatureConverter;