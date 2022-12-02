import { Suspense } from "react"
import { useLocation } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import { AuthContextProvider } from "./Context/AuthContext"
import { ThemeProvider } from "./Context/ThemeContext"

import MainRouter from "./Components/MainRouter/MainRouter"
import Navbar from "./Components/Navbar/Navbar"

import "./App.css"
import "react-toastify/dist/ReactToastify.min.css"

const App = () => {
  const { pathname } = useLocation()

  return (
    <Suspense fallback={"loading"}>
      <ToastContainer />
      <div className='App'>
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
