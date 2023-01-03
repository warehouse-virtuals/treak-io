import { Suspense } from "react"
import { useLocation } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import { UserContextProvider } from "./Context/UserContext"
import { FirebaseContextProvider } from "./Context/FirebaseContext"

import { ThemeProvider } from "./Context/ThemeContext"

import MainRouter from "./Components/MainRouter/MainRouter"
import Navbar from "./Components/Navbar/Navbar"

import "./App.css"
import "react-toastify/dist/ReactToastify.min.css"

const App = () => {
  const { pathname } = useLocation()

  return (
    <Suspense fallback={"loading"}>
      <ToastContainer
        position='bottom-left'
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme='dark'
      />
      <div className='App'>
        <UserContextProvider>
          <FirebaseContextProvider>
            <ThemeProvider>
              {pathname === "/login" || pathname === "/" ? null : <Navbar />}
              <MainRouter />
            </ThemeProvider>
          </FirebaseContextProvider>
        </UserContextProvider>
      </div>
    </Suspense>
  )
}

export default App
