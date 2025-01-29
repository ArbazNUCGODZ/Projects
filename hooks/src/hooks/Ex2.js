//creating a background changer app
import React, { useState } from 'react';
// import './App.css';
function Ex2() {
  const [bg, setBg] = useState('purple');
  const [name, setName] = useState('Click Me');
  const bgChange = () => {   
    let newBg = 'yellow';
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
      </div>
    </>
  );
}
export default Ex2;
