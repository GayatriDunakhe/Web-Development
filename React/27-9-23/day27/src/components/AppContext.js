import React from 'react';
import {createContext} from 'react';
import {useState} from 'react';
// Create a new context
const AppContext = createContext();
const AppProvider = ({children}) => {
    const [count,setCount]=useState(0);
    return(
        <AppContext.Provider value={{count,setCount}}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContext;