import  { useContext } from 'react'
import { counterContext } from './CounterProvider'

const IncrementButton = () => {
    const { setCounter} = useContext(counterContext)
  return (
    <div>
        <button onClick={() => setCounter(prev => prev + 1)}>
            Increment
        </button>
    </div>
  )
}

export default IncrementButton