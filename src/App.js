// import logo from './logo.svg';
import './App.css';


import React, { useState } from 'react';

function App() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleNext = () => {
    // handle next button click
    console.log('Next button clicked');
  };

  return (
    <div className='center-container'>
      <h1 className='center'>Select Number of Subjects</h1>
      <select value={selectedValue} onChange={handleChange} className='center-dropdown'>
        <option value='' disabled>
          None
        </option>
        {[...Array(9)].map((_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <button className='next-button' onClick={handleNext}>Next</button>
    </div>
  );
}
export default App;
