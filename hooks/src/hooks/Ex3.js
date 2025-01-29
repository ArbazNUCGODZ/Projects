//creating a background color changer app selecting color from select input options 
import React, { useState } from 'react';
// import './App.css';
function Ex3() {
  const [bg, setBg] = useState('purple');
  const [name, setName] = useState('Click Me');
  const bgChange = (e) => {   
    let newBg = e.target.value;
    setBg(newBg);
    setName('Ouch!! 😄')

 };  
  const bgBack = () => {
    setBg('purple');
    setName('Ayyo 😒');
  }; 
  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
        <select onChange={bgChange}>
          <option value="purple">Purple</option>
          <option value="yellow">Yellow</option>
          <option value="black">Black</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
      </div>
    </>
  );
}
export default Ex3;