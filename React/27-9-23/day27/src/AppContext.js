import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  // };

  // const decrement = () => {
  //   setCount(count - 1);
  // };

  // return (
  //   <AppContext.Provider value={{ count, increment, decrement }}>
  //     {children}
  //   </AppContext.Provider>
  // );


  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [res, setRes] = useState(0)

  const addition = () => {
    const res = parseInt(num1) + parseInt(num2);
    setRes(res)
  }

  return(
    <AppContext.Provider value={{num1, setNum1, num2, setNum2, res, addition}}>
      {children}
    </AppContext.Provider>
  );
}