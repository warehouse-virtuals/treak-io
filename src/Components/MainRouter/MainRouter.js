import { Routes, Route } from "react-router-dom"
import Home from "../Home/Home"
import Login from "../Login/Login"
import Register from "../Register/Register"

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default MainRouter
