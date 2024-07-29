import { useContext } from "react"
import { GlobalContext } from ".."

export default function ContextButton() {

    const { setTheme, theme } = useContext(GlobalContext)
    return (
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            Change Theme
        </button>
    )
}