"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext()

// Context provider 
// It is a wrapper thus it should have a children prop and the provider should wrap the app

export const ThemeProvider = ({children}) => {

    const [mode,setMode] = useState("dark");

    const toggle = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark' ) )
    }

    return(
        <ThemeContext.Provider value={{toggle, mode}}>
        <div className={`theme ${mode}`}>
            {children}
        </div>
    </ThemeContext.Provider>
    )

}