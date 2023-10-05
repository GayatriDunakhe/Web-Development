import React, { useContext } from "react";
import AppContext from "./AddAppContext";

const Addition = () =>{
    const {num1, num2, res, setRes} = useContext(AppContext)
    
    const add = () =>{
        res = num1 + num2
        setRes(res)
    }

    return(
        <div>
            <p> Addition is: {res} </p>
            <button onClick={add}>Increment</button>
        </div>
    );
}

export default Addition;