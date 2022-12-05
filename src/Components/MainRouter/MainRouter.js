import { Routes, Route } from "react-router-dom"
import Dashboard from "../Dashboard/Dashboard"
import Login from "../Login/Login"
import Register from "../Register/Register"
import Agenda from "../Agenda/Agenda"
import Audiogram from "../Audiogram/Audiogram"
import Repair from "../Repair/Repair"
import RepairForm from "../Repair/RepairForm"
import Patients from "../Patients/Patients"
import AddPatient from "../Patients/AddPatient"
import Messages from "../Messages/Messages"
import Analytics from "../Analytics/Analytics"
import AddAppointments from "../Appointments/AddAppointments"

import AA from "../AA/AA"

const MainRouter = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/patients' element={<Patients />} />
      <Route path='/addPatient' element={<AddPatient />} />
      {/* <Route path='/agenda' element={<Agenda />} /> */}
      <Route path='/agenda' element={<AA />} />
      <Route path='/audiogram' element={<Audiogram />} />
      <Route path='/addAppointment' element={<AddAppointments />} />
      <Route path='/repair' element={<Repair />} />
      <Route path='/repairform' element={<RepairForm />} />
      <Route path='/messages' element={<Messages />} />
      <Route path='/analytics' element={<Analytics />} />
    </Routes>
  )
}

export default MainRouter
