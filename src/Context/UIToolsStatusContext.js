import { createContext, useContext, useState, useEffect } from "react"
import useWindowSize from "../Hooks/useWindowBreakpoint"

const UIToolsStatusContext = createContext()

export const UIToolsStatusContextProvider = ({ children }) => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false)
  const [expandSearchBar, setExpandSearchBar] = useState(true)
  const [width] = useWindowSize()

  const toggleCollapse = (boolean) => {
    if (width < 992) {
      setIsNavbarCollapsed(boolean)
    } else {
      setIsNavbarCollapsed(false)
    }
  }

  const navbarButtonClick = (path) => {
    if (width < 992) {
      setIsNavbarCollapsed(true)
    }
  }

  useEffect(() => {
    if (width < 992) {
      setIsNavbarCollapsed(true)
      setExpandSearchBar(false)
    } else {
      setIsNavbarCollapsed(false)
      setExpandSearchBar(true)
    }
  }, [width])

  return (
    <UIToolsStatusContext.Provider
      value={{
        width,
        toggleCollapse,
        expandSearchBar,
        navbarButtonClick,
        isNavbarCollapsed,
        setExpandSearchBar,
      }}
    >
      {children}
    </UIToolsStatusContext.Provider>
  )
}

export const UIToolsStatus = () => {
  return useContext(UIToolsStatusContext)
}
