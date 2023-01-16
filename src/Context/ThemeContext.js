import { createContext, useContext } from "react"

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  return <ThemeContext.Provider value={null}>{children}</ThemeContext.Provider>
}

export const ThemeState = () => {
  return useContext(ThemeContext)
}
