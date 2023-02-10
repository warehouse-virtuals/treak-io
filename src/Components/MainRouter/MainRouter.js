import { Navigate } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import { UserAuth } from "../../Context/UserContext"

import Chat from "../Chat/Chat"
import Login from "../Login/Login"
import Agenda from "../Agenda/Agenda"
import Repair from "../Repair/Repair"
import Register from "../Register/Register"
import NotFound from "../NotFound/NotFound"
import Patients from "../Patients/Patients"
import RepairForm from "../Repair/RepairForm"
import Dashboard from "../Dashboard/Dashboard"
import Analytics from "../Analytics/Analytics"
import Audiogram from "../Audiogram/Audiogram"
import AddPatient from "../Patients/AddPatient"
import AddAppointments from "../Appointments/AddAppointments"

const MainRouter = () => {
  const { user } = UserAuth()

  if (user.auth) {
    return (
      <Routes>
        <Route path='*' element={<NotFound />} status={404} />
        <Route path='/login' element={<Navigate replace to='/dashboard' />} />
        <Route
          path='/register'
          element={<Navigate replace to='/dashboard' />}
        />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/patients' element={<Patients />} />
        <Route path='/addPatient' element={<AddPatient />} />
        <Route path='/agenda' element={<Agenda />} />
        <Route path='/audiogram' element={<Audiogram />} />
        <Route path='/addAppointment' element={<AddAppointments />} />
        <Route path='/repair' element={<Repair />} />
        <Route path='/repairform' element={<RepairForm />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/analytics' element={<Analytics />} />
      </Routes>
    )
  } else {
    return (
      <Routes>
        <Route path='*' element={<Navigate replace to='/login' />} />
        {/* <Route path='/dashboard' element={<Dashboard />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    )
  }
}

export default MainRouter
