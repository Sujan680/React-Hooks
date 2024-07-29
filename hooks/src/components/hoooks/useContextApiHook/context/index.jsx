

//create context first

import { createContext } from "react";

export const GlobalContext = createContext(null);

//create the global state that receive component as children

const GlobalState = ({children}) => {
    return(
        <GlobalContext.Provider value={{ }}>
                {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;