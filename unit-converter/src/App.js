import React, { useState } from "react";
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [convertedValue, setConvertedValue] = useState(null);
  const [unitType, setUnitType] = useState('km-to-miles');

  const convertUnits = () => {
    if (unitType === 'km-to-miles') {
      setConvertedValue((value * 0.621371).toFixed(2));
    } else if (unitType === 'kg-to-pounds') {
      setConvertedValue((value * 2.20462).toFixed(2));
    }
  };

  return (
    <div className="App">
      <h1>Unit Converter</h1>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter value"
      />
      <select
        onChange={(e) => setUnitType(e.target.value)}
        value={unitType}
      >
        <option value="km-to-miles">Kilometers to Miles</option>
        <option value="kg-to-pounds">Kilograms to Pounds</option>
      </select>
      <button onClick={convertUnits}>Convert</button>

      {convertedValue && (
        <h2>Converted Value: {convertedValue}</h2>
      )}
    </div>
  );
}

export default App;
