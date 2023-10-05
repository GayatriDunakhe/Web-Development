import React from 'react';
import { useAppContext } from './AppContext';

function Addition() {
  const { num1, setNum1, num2, setNum2, res, addition } = useAppContext();

  const handleNum1 = (e) =>{
    setNum1(e.target.value)
  }

  const handleNum2 = (e) =>{
    setNum2(e.target.value)
  }

  return (
    <div>
      <lable>Enter num1: </lable>
      <input type='number' onChange={handleNum1} value={num1}/>

      <br/>

      <lable>Enter num2: </lable>
      <input type='number' onChange={handleNum2} value={num2}/>

      <p>Addition: {res}</p>
      <button onClick={addition}>Add</button>
    </div>
  );
}

export default Addition;