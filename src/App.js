import "./App.css"
import MainRouter from "./Components/MainRouter/MainRouter"
import { AuthContextProvider } from "./Context/AuthContext"
import { ThemeProvider } from "./Context/ThemeContext"

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeProvider>
          <MainRouter />
        </ThemeProvider>
      </AuthContextProvider>
    </div>
  )
}

export default App
