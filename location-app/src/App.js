// src/App.js

import React, { useState } from 'react';  // Import useState hook
import './App.css';

function App() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setError(null);
        },
        (err) => {
          setLocation(null);
          setError(err.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div className="App">
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>React Location App</h1>
        <button onClick={getLocation}>Get Current Location</button>
        {location && (
          <div>
            <h2>Latitude: {location.latitude}</h2>
            <h2>Longitude: {location.longitude}</h2>
          </div>
        )}
        {error && <h2>Error: {error}</h2>}
      </div>
    </div>
  );
}

export default App;
