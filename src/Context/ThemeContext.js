import { createContext, useContext, useState } from "react"

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light")
  const [backgroundDim, setBackgroundDim] = useState(false)

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setCurrentTheme,
        backgroundDim,
        setBackgroundDim,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const ThemeState = () => {
  return useContext(ThemeContext)
}
