import { createContext, useContext, useState, useEffect } from "react"
import useWindowSize from "../Hooks/useWindowBreakpoint"

const UIToolsStatusContext = createContext()

export const UIToolsStatusContextProvider = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [expandSearchBar, setExpandSearchBar] = useState(true)
  const [width] = useWindowSize()

  const toggleCollapse = (boolean) => {
    if (width < 992) {
      setIsCollapsed(boolean)
    } else {
      setIsCollapsed(false)
    }
  }

  const navbarButtonClick = (path) => {
    if (width < 992) {
      setIsCollapsed(true)
    }
  }

  useEffect(() => {
    if (width < 992) {
      setIsCollapsed(true)
      setExpandSearchBar(false)
    } else {
      setIsCollapsed(false)
      setExpandSearchBar(true)
    }
  }, [width])

  return (
    <UIToolsStatusContext.Provider
      value={{
        isCollapsed,
        width,
        toggleCollapse,
        navbarButtonClick,
        expandSearchBar,
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
