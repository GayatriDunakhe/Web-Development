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

9:09
// Counter.js
import React from 'react';
import {useContext} from 'react';
import {AppContext} from './AppContext';
const Count =()=>{
    const {count,setCount}= useContext(AppContext);
    const increment = () =>{
        setCount(count+1);
    };
    return (
        <div>
            <p> Count: {count} </p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
export default Count;

9:09
// App.js
import React from 'react';
import Counter from './components/Counter';
function App(){
  return(
    <div className="App">
      <Counter/>
    </div>
  )
}
export default App;