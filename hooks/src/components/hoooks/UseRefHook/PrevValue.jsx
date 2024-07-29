

import React, { useEffect, useRef, useState } from 'react'



const PrevValue = () => {

    const [count, setCount] = useState(0);
    const prevCount = useRef();

    useEffect(() => {
        prevCount.current = count;
    }, [count])
    return (
        <div>
            <p> Current count: {count} </p>
            <p> Prev Count: {prevCount.current} </p>
            <button onClick={() => setCount(count + 1)}> Increment </button>
        </div>
    )
}

export default PrevValue