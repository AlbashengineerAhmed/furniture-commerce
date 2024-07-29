import React, { useEffect, useState } from 'react';
import './App.css';
import '../src/assets/css/custom.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 4-second delay
    const delay = 4000;

    // Set loading to false after the delay
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, delay);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []); // Run this effect only once on component mount

  return (
    <div className="App">
      {loading && (
        <div className='loading-overlay'>
          <div className='loading-wrapper'>
            <span className="loader">Loading</span>
          </div>
        </div>
      )}
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
