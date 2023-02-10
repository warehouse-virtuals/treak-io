import { Suspense, useEffect } from "react"
import { ToastContainer } from "react-toastify"
import { ThemeState } from "./Context/ThemeContext"
import { UserContextProvider } from "./Context/UserContext"
import { FirebaseContextProvider } from "./Context/FirebaseContext"
import { UIToolsStatusContextProvider } from "./Context/UIToolsStatusContext"
import BackgroundDim from "./UITools/BackgroundDim/BackgroundDim"

import MainRouter from "./Components/MainRouter/MainRouter"
import Navbar from "./Components/Navbar/Navbar"

import "./App.css"
import "react-toastify/dist/ReactToastify.min.css"

const App = () => {
  const { currentTheme, backgroundDim } = ThemeState()

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
      <div className={`App ${currentTheme}`}>
        <UserContextProvider>
          <FirebaseContextProvider>
            <UIToolsStatusContextProvider>
              <BackgroundDim />
              <Navbar />
              <MainRouter />
            </UIToolsStatusContextProvider>
          </FirebaseContextProvider>
        </UserContextProvider>
      </div>
    </Suspense>
  )
}

export default App
