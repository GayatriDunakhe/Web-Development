import React, { createContext, useState } from "react";

const AppContext = createContext();
const AppProvider = ({child}) =>{
    const [num1, setNum1] = useState(4)
    const [num2, setNum2] = useState(6)
    const [res, setRes] = useState(0)

    return(
        <AppContext.Provider value={{num1, num2, res, setRes}}>
            {child}
        </AppContext.Provider>
    )
}

export default AppContext;