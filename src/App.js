/* eslint-disable jsx-a11y/alt-text */
import { Suspense, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import { AuthContextProvider } from "./Context/AuthContext"
import { ThemeProvider } from "./Context/ThemeContext"

import MainRouter from "./Components/MainRouter/MainRouter"
import Navbar from "./Components/Navbar/Navbar"
import useWindowSize from "./Hooks/useWindowSize"

import "./App.css"
import "react-toastify/dist/ReactToastify.min.css"

// import useWindowSize from "./Hooks/useWindowSize"

const App = () => {
  const { pathname } = useLocation()

  const [width, height] = useWindowSize()
  console.log(width, height)
  // const [width, height] = useWindowSize()

  // if (width < 960 || height < 730) {
  //   return <div>Hadi bakalım</div>
  // } else {
  //   return (
  //     <Suspense fallback={"loading"}>
  //       <ToastContainer />
  //       <div className='App'>
  //         <AuthContextProvider>
  //           <ThemeProvider>
  //             {pathname === "/login" || pathname === "/" ? null : <Navbar />}
  //             <MainRouter />
  //           </ThemeProvider>
  //         </AuthContextProvider>
  //       </div>
  //     </Suspense>
  //   )
  // }

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
