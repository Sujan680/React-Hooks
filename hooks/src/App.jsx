import ReactUseEffect from "./components/hoooks/UseEffect"
import CleanUp from "./components/hoooks/UseEffect/CleanUp"
import Clock from "./components/hoooks/UseEffect/clock"
import FetchApi from "./components/hoooks/UseEffect/FetchApi"
import HowNotToFetchApi from "./components/hoooks/UseEffect/HowNotToFetchApi"
import UseEffectChallenge from "./components/hoooks/UseEffect/UseEffectChallenge"

function App() {
 

  return (
    <>
        <h2 style={{textAlign: 'center', fontStyle:'italic'}}>Hi, this is useEffect hooks concepts</h2>
        {/* <ReactUseEffect/>
        <Clock/>
        <UseEffectChallenge/>
        <CleanUp /> */}
        {/* <HowNotToFetchApi/> */}
        <FetchApi/>
    </>
  )
}

export default App
