import type { ReactNode } from "react"
import { useState } from "react"
import { ThemeContext } from "./ThemeContext"

interface ThemeContextProps {
    children : ReactNode 
}

export default function ThemeProvider({children} : ThemeContextProps) {
    const [darkMode, setDarkMode] = useState(false)

    function flipDarkMode() : void {
        setDarkMode(mode => {
            if (!mode) {
            document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
            return !mode
        })
    }
    
    return (
        <ThemeContext.Provider value={{darkMode, flipDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}