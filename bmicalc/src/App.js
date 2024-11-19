import React, { useState } from "react";
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = weight / (height * height);
      setBmi(bmiValue.toFixed(2));
    } else {
      alert("Please enter both weight and height");
    }
  };

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <input
        type="number"
        placeholder="Enter weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter height (m)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && <h2>Your BMI: {bmi}</h2>}
    </div>
  );
}

export default App;
