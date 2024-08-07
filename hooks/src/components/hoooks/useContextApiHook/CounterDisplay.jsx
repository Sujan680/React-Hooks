import { useContext } from "react"
import { counterContext } from "./CounterProvider";



const CounterDisplay = () => {

    const {counter} = useContext(counterContext);
  return (
    <div>
        <h2>
           Counter: {counter}
        </h2>
    </div>
  )
}

export default CounterDisplay;