import React, { useState } from 'react';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const celsiusValue = e.target.value;
    const fahrenheitValue = (celsiusValue * 9/5) + 32;
    setCelsius(celsiusValue);
    setFahrenheit(fahrenheitValue);
  }

  const handleFahrenheitChange = (e) => {
    const fahrenheitValue = e.target.value;
    const celsiusValue = (fahrenheitValue - 32) * 5/9;
    setFahrenheit(fahrenheitValue);
    setCelsius(celsiusValue);
  }

  return (
    <div>
      <h1>Temperature Converter</h1>
      <div>
        <label>Celsius:</label>
        <input type="number" value={celsius} onChange={handleCelsiusChange} />
      </div>
      <div>
        <label>Fahrenheit:</label>
        <input type="number" value={fahrenheit} onChange={handleFahrenheitChange} />
      </div>
    </div>
  );
}

export default TemperatureConverter;