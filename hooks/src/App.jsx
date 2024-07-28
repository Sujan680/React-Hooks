import FetchDataComponent from "./components/hoooks/FetchApi/FetchDataComponent"
import ReactUseEffect from "./components/hoooks/UseEffect"
import CleanUp from "./components/hoooks/UseEffect/CleanUp"
import Clock from "./components/hoooks/UseEffect/clock"
import FetchApi from "./components/hoooks/UseEffect/FetchApi"
import FetchUsingAsyncAwait from "./components/hoooks/UseEffect/FetchUsingAsyncAwait"
import HowNotToFetchApi from "./components/hoooks/UseEffect/HowNotToFetchApi"
import UseEffectChallenge from "./components/hoooks/UseEffect/UseEffectChallenge"
import Form from "./components/hoooks/useStateHook/Form"

function App() {
 

  return (
    <>
        <h2 style={{textAlign: 'center', fontStyle:'italic'}}>Hi, this is hooks concepts</h2>
        {/* <ReactUseEffect/>
        <Clock/>
        <UseEffectChallenge/>
        <CleanUp /> */}
        {/* <HowNotToFetchApi/> */}
        {/* <FetchApi/> */}  
        {/* <FetchUsingAsyncAwait/> */}
        {/* <FetchDataComponent/> */}

        <Form/>

    </>
  )
}

export default App
