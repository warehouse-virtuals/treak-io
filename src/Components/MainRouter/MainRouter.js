import { Routes, Route } from "react-router-dom"
import { AuthContextProvider } from "../../Context/AuthContext"
import Home from "../Home/Home"
import Login from "../Login/Login"
import Register from "../Register/Register"

const MainRouter = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthContextProvider>
  )
}

export default MainRouter
