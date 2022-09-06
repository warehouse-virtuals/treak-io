import { Routes, Route } from "react-router-dom"
import Dashboard from "../Dashboard/Dashboard"
import Login from "../Login/Login"
import Register from "../Register/Register"
import Scheduler from "../Scheduler/Scheduler"
import Repair from "../Repair/Repair"
import Patients from "../Patients/Patients"
import Messages from "../Messages/Messages"
import Analytics from "../Analytics/Analytics"

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/scheduler" element={<Scheduler />} />
      <Route path="/repair" element={<Repair />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/analytics" element={<Analytics />} />
    </Routes>
  )
}

export default MainRouter
