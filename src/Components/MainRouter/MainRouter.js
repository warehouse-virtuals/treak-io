import { Routes, Route } from "react-router-dom"
import Dashboard from "../Dashboard/Dashboard"
import Login from "../Login/Login"
import Register from "../Register/Register"
import Scheduler from "../Scheduler/Scheduler"
import Repair from "../Repair/Repair"

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/repair" element={<Repair />} />
      <Route path="/scheduler" element={<Scheduler />} />
    </Routes>
  )
}

export default MainRouter
