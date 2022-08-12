import { Routes, Route } from "react-router-dom"
import Dashboard from "../Dashboard/Dashboard"
import Login from "../Login/Login"
import Register from "../Register/Register"
import Scheduler from "../Scheduler/Scheduler"

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/scheduler" element={<Scheduler />} />
    </Routes>
  )
}

export default MainRouter
