import React, { useState } from "react";
import CountLabel from './countLabel';

export default function CountShow() {

    const [count, setCount] = useState(0);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <button onClick={() => setCount(count - 1)}>
                Decrement
            </button>
            <CountLabel count={count} />
        </>
    );
}
