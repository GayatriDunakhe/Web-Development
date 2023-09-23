import React, { useState } from 'react';

function CounterPropsComponent(props) {

    const [counter, setCount] = useState(props.counter);

    const increment = () => {
        setCount(counter + 1);
    }

    const decrement = () => {
        setCount(counter - 1);
    }

    return (
        <div>
        <h2>Counter props</h2>
        <h3>{counter}</h3>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default CounterPropsComponent;