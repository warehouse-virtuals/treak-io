import { createContext, useContext, useState } from "react"

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light")

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const ThemeState = () => {
  return useContext(ThemeContext)
}
