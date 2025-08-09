import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [values, setValues] = useState([]);
  const [isAscending, setIsAscending] = useState(true);

  const increment = () => setCounter(prev => prev + 1);
  const decrement = () => setCounter(prev => Math.max(0, prev - 1));

  const addValue = () => {
    if (counter > 0) {
      setValues(prev => [...prev, counter]);
    }
  };

  const toggleSort = () => {
    setIsAscending(prev => !prev);
  };

  const sortedValues = [...values].sort((a, b) =>
    isAscending ? a - b : b - a
  );

  return (
    <div className="container">
      <h1 className="title">Counter App</h1>

      <div className="counter-section">
        <button className="btn" onClick={decrement}>−</button>
        <span className="counter">{counter}</span>
        <button className="btn" onClick={increment}>+</button>
        <button className="btn add-btn" onClick={addValue}>Add</button>
      </div>

      <div className="sort-section">
        <button className="btn sort-btn" onClick={toggleSort}>
          Sort: {isAscending ? 'Ascending' : 'Descending'}
        </button>
      </div>

      <div className="list-section">
        <h3>Added Values:</h3>
        {sortedValues.length === 0 ? (
          <p>No values added yet.</p>
        ) : (
          <ul>
            {sortedValues.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
