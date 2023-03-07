import React, { useState } from "react";

function App() {
  const [Square, setSquare] = useState("red");

  const handleClick = (color) => {
    setSquare(color);
  };

  return (
    <div>
      {Square !== "green" && (
        <div
          className="green"
          onClick={() => handleClick("green")}
        ></div>
      )}
      {Square !== "red" && (
        <div
          className="red"
          onClick={() => handleClick("red")}
        ></div>
      )}

      {Square !== "blue" && (
        <div
        className="blue"
        onClick={() => handleClick("blue")}
      ></div>
      )}
    </div>
  );
}

export default App;
