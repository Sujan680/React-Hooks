import FetchDataComponent from "./components/hoooks/FetchApi/FetchDataComponent"
import ContextButton from "./components/hoooks/useContextApiHook/context/context-component/Button"
import TextComponent from "./components/hoooks/useContextApiHook/context/context-component/Text"
import ContextApi from "./components/hoooks/useContextApiHook/ContextApi"
import CounterProvider from "./components/hoooks/useContextApiHook/CounterProvider"
import NestedComponent from "./components/hoooks/useContextApiHook/NestedComponent"
import ReactUseEffect from "./components/hoooks/UseEffect"
import CleanUp from "./components/hoooks/UseEffect/CleanUp"
import Clock from "./components/hoooks/UseEffect/clock"
import FetchApi from "./components/hoooks/UseEffect/FetchApi"
import FetchUsingAsyncAwait from "./components/hoooks/UseEffect/FetchUsingAsyncAwait"
import HowNotToFetchApi from "./components/hoooks/UseEffect/HowNotToFetchApi"
import UseEffectChallenge from "./components/hoooks/UseEffect/UseEffectChallenge"
import UseReducerCounter from "./components/hoooks/useReducerHook/Counter"
import ClickCounter from "./components/hoooks/UseRefHook/ClickCounter"
import FocusInput from "./components/hoooks/UseRefHook/FocusInput"
import PrevValue from "./components/hoooks/UseRefHook/PrevValue"
import Counter from "./components/hoooks/useStateHook/Counter"
import Form from "./components/hoooks/useStateHook/Form"
import Profile from "./components/hoooks/useStateHook/Profile"
import Todo from "./components/hoooks/useStateHook/Todo"

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

        {/* <Form/> */}
        <Profile/>
        <Todo/>
        <Counter/>

        <ContextApi/>

       <CounterProvider>
           <NestedComponent/>
       </CounterProvider>

          <ContextButton/>
          <TextComponent/>

          <UseReducerCounter/>

          {/* useRef examples */}
          <FocusInput/>
          <ClickCounter/>
          <PrevValue/>

    </>
  )
}

export default App
