import { Suspense, useEffect } from "react"
import "./App.css"
import MainRouter from "./Components/MainRouter/MainRouter"
import { AuthContextProvider } from "./Context/AuthContext"
import { ThemeProvider } from "./Context/ThemeContext"



const App = () => {

  return (
    <Suspense fallback="loading">
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
