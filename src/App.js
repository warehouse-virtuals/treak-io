/* eslint-disable jsx-a11y/alt-text */
import { Suspense } from "react"
import "./App.css"
import MainRouter from "./Components/MainRouter/MainRouter"
import { AuthContextProvider } from "./Context/AuthContext"
import { ThemeProvider } from "./Context/ThemeContext"
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from "react-toastify"


const App = () => {

  return (
    <Suspense fallback="loading">
      <ToastContainer/>
      <div className="App">
        <AuthContextProvider>
          <ThemeProvider>
            <MainRouter />
          </ThemeProvider>
        </AuthContextProvider>
      </div>
    </Suspense>
  )
}

export default App
