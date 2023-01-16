import { Suspense } from "react"

import { ToastContainer } from "react-toastify"

import { UserContextProvider } from "./Context/UserContext"

import { FirebaseContextProvider } from "./Context/FirebaseContext"

import { UIToolsStatusContextProvider } from "./Context/UIToolsStatusContext"

import { ThemeProvider } from "./Context/ThemeContext"

import MainRouter from "./Components/MainRouter/MainRouter"
import Navbar from "./Components/Navbar/Navbar"

import "./App.css"
import "react-toastify/dist/ReactToastify.min.css"

const App = () => {
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
            <UIToolsStatusContextProvider>
              <ThemeProvider>
                <Navbar />
                <MainRouter />
              </ThemeProvider>
            </UIToolsStatusContextProvider>
          </FirebaseContextProvider>
        </UserContextProvider>
      </div>
    </Suspense>
  )
}

export default App
