
import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        //setCount(count + 1);
        //updater function
        setCount(c => c + 1);
    };

    const decrement = () => {
        if (count > 0) {
            //setCount(count - 1);
            setCount(c => c - 1);
        };
    };

    const reset = () => {
        setCount(0);
    }

    return (
        <div className="count-container">
            <h2 className="count-display">Count : {count}</h2>
            <button className="counter-button" onClick={increment}>Increase</button>
            <button className="counter-button" onClick={decrement}>Decrease</button>
            <button className="counter-button" onClick={reset}>Reset</button>
        </div>
    )
};

export default Counter