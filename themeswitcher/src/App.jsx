import { useState } from "react";
import { ThemeProvider } from "./contexts/Theme";
import { useEffect } from "react";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

export default function App() {
  //1.. Initialize the state
  const [themeMode, setThemeMode] = useState('light');


  // functions to change the state
  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  // actual change in theme
    // Step 2: Apply the theme to the HTML element
  useEffect(() => {
   document.querySelector('html').classList.remove('light', 'dark')
   document.querySelector('html').classList.add(themeMode)
  }, [themeMode]) // Re-run this effect when themeMode changes
  
  return (
      <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
          <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                {/* theme Btn */}
                <ThemeBtn/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                {/* Card */}
                <Card/>
              </div>
            </div>
          </div>
      </ThemeProvider>
  )
}