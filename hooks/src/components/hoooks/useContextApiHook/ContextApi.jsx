import { createContext, useContext } from "react"

const ThemeContext = createContext();
export default function ContextApi() {
    const theme = {
        background: 'black',
        color: 'white'
    }
  return (
    <div>
        <ThemeContext.Provider value={theme}>
            <ThemeButton/>
        </ThemeContext.Provider>
    </div>
  )
}

function ThemeButton(){
    const theme = useContext(ThemeContext);
    return(
        <button style={{background: theme.background, color: theme.color}}>
            ThemeButton
        </button>
    )
}
