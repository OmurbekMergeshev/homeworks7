import React, { useState } from 'react';

function App() {
  const [greenSquare, setGreenSquare] = useState(true);
  const [redSquare, setRedSquare] = useState(false);

  const handleGreenClick = () => {
    setGreenSquare(false);
    setRedSquare(true);
  };

  const handleRedClick = () => {
    setGreenSquare(true);
    setRedSquare(false);
  };

  return (
    <>
      <div className='blue' />
      {greenSquare && <div className='green'  onClick={handleGreenClick} />}
      {redSquare && <div className='red' onClick={handleRedClick} />}
    </>
  );
}

export default App;
