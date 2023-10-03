import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count + 1);
    };
    
    const decrement = () => {
        setCount(count - 1);
    };

    return(
        <div>
            <h1>Counter App</h1>
            <h2 onChange={setCount}>{count}</h2>
            <button onClick={increment} className="inc">Increment</button>
            <button onClick={decrement} className="dec">Decrement</button>
        </div>
    );
}

export default Counter;