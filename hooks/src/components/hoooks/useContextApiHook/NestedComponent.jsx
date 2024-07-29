
import CounterDisplay from './CounterDisplay'
import DecrementButton from './DecrementButton'
import IncrementButton from './IncrementButton'

const NestedComponent = () => {
  return (
    <div>
        <CounterDisplay/>
        <IncrementButton/>
        <DecrementButton/>
    </div>
  )
}

export default NestedComponent