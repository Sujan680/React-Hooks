import { useRef, useState } from "react"



const ClickCounter = () => {

    const [state, setState] = useState(0);

    const clickCount = useRef(0);

    const handleClick = () => {
        clickCount.current+=1;
        setState(state + 1);   // force a re-render to show the updated click count
    }
  return (
    <div>
        <button onClick={handleClick}> CLick Me</button>
        <p> Button Clicked {clickCount.current} times </p>
    </div>
  )
}

export default ClickCounter;