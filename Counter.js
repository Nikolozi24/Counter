import React, { useState } from "react";

const Counter = ({ Defevalue }) => {
  const handleIncriment = (value) => {
    setCounter((prev) => prev + value);
  };
  const handleDecriment = (value) => {
    setCounter((prev) => prev - value);
  };
  const [counter, setCounter] = useState(0);

  return (
    <div style={{marginBottom:'20px'}}>
      <div>{counter}</div>
      <button style={{backgroundColor:"green"}} onClick={(e) => handleIncriment(Defevalue)}>incriment</button>
      <button  style={{backgroundColor:'red'}}onClick={(e) => handleDecriment(Defevalue)}>Decriment</button>
    </div> 
  );
};
export default Counter;
