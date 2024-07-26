import { useEffect, useState } from "react";
import './index.css'
const ReactUseEffect = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Count value :', count);
    }, [count])

  return (
    <div className="container">
        <h1>UseEffect Hook</h1>
        <p> {count} </p>
        <button onClick={() => setCount(count+1)}>Increment</button>

    </div>
  )
}

export default ReactUseEffect;