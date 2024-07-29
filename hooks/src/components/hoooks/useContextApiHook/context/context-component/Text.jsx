import { useContext } from "react"
import { GlobalContext } from ".."



export default function TextComponent() {

        const {theme} = useContext(GlobalContext);
  return (
    <div>
        <h2 style={{ 
            fontSize: theme === 'light' ? '50px' : '100px',
            background: theme === 'light' ? "white" : "black" ,
            color: theme === 'light' ? 'blue': 'white'
         }}>
            Sujan Magar
        </h2>
    </div>
  )
}
