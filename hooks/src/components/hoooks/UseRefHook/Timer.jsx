import { useRef, useState } from "react"


const Timer = () => {
    const countRef = useRef(null);
    const [count, setCount]=useState(0);

const handleStart=()=> {
   countRef.current = setInterval(()=> {
        setCount((count) => count+1)
   }, 1000)
}

const handleStop=()=> {
    clearInterval(countRef.current)
}

const handleReset = () => {
    clearInterval(countRef.current)
    setCount(0);
}


  return (
    <div>
        <p> {count.toFixed(3)} </p>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Timer