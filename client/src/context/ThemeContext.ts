import { createContext, useContext } from "react";

interface ThemeContextInterface {
    darkMode : boolean
    flipDarkMode : () => void
}

export const ThemeContext = createContext<ThemeContextInterface | undefined>(undefined)

export function useTheme() {
    const ctx = useContext(ThemeContext)

    if (!ctx) {
        throw new Error ('useTheme must be used inside ThemeProvider')
    }

    return ctx
}