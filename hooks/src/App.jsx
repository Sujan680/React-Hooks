import ReactUseEffect from "./components/hoooks/UseEffect"
import Clock from "./components/hoooks/UseEffect/clock"
import UseEffectChallenge from "./components/hoooks/UseEffect/UseEffectChallenge"

function App() {
 

  return (
    <>
        <h2 style={{textAlign: 'center', fontStyle:'italic'}}>Hi, this is useEffect hooks concepts</h2>
        <ReactUseEffect/>
        <Clock/>
        <UseEffectChallenge/>
    </>
  )
}

export default App
