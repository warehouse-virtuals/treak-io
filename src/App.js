/* eslint-disable jsx-a11y/alt-text */
import { Suspense } from "react"
import { useLocation } from "react-router-dom"
import "./App.css"

import MainRouter from "./Components/MainRouter/MainRouter"
import { AuthContextProvider } from "./Context/AuthContext"
import { ThemeProvider } from "./Context/ThemeContext"
import "react-toastify/dist/ReactToastify.min.css"
import { ToastContainer } from "react-toastify"
import Navbar from "./Components/Navbar/Navbar"

const App = () => {
  const { pathname } = useLocation()

  return (
    <Suspense fallback="loading">
      <ToastContainer />
      <div className="App">
        <AuthContextProvider>
          <ThemeProvider>
            {pathname === "/login" || pathname === "/" ? null : <Navbar />}
            <MainRouter />
          </ThemeProvider>
        </AuthContextProvider>
      </div>
    </Suspense>
  )
}

export default App
