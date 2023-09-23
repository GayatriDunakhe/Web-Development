import React, { useState } from "react";

function Toggelbtn() {
    
    const [isOn, setIsOn] = useState(false)

    const toggel = () =>{
        setIsOn((prev) => !prev)
    }

    return(
        <div>
            <h1>Toggle button</h1>
            <button onClick={toggel}>
                {isOn ? 'On' : 'Off'}
            </button>

        </div>
    );
}

export default Toggelbtn;