import { createContext, useContext } from "react";

// Step 1: Create a Context for the theme
//This is a context object created using createContext. It has a default value that includes a themeMode (set to 'light') and two functions (darkTheme and lightTheme) that do nothing by default. This provides a structure for what the context should look like.

export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme: () => {},
    lightTheme: () => {}
})

// Step 2: Create a ThemeProvider component
// : This is a wrapper component that will provide the context to its children. It’s essentially an alias for ThemeContext.Provider.

export const ThemeProvider = ThemeContext.Provider

// Step 3: Create a custom hook to use the ThemeContext
//  A custom hook that utilizes useContext to access the ThemeContext. This allows any component that calls useTheme to access the context values (themeMode, darkTheme, lightTheme).

export default function useTheme(){
    return useContext(ThemeContext);
}