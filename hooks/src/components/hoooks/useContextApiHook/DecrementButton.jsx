import { useContext } from 'react'
import { counterContext } from './CounterProvider'

const DecrementButton = () => {
    const {setCounter} = useContext(counterContext)
  return (
    <div>
        <button onClick={() => setCounter(prev => prev -1)}>
            Decrement
        </button>
    </div>
  )
}

export default DecrementButton