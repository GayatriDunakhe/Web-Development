import React from 'react';
import {useContext} from 'react';
import {AppContext} from './AddAppContext';
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