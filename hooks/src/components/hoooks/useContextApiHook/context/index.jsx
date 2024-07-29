

//create context first

import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

//create the global state that receive component as children

const GlobalState = ({children}) => {

    const [theme, setTheme] = useState('light')
    return(
        <GlobalContext.Provider value={{theme, setTheme}}>
                {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;