import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"
import './App.css'

const App = () => {
  return (
    <UserContextProvider>
      <h2>React with chai aur code</h2>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App