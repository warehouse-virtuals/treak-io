import React, { useState, useEffect, useRef } from "react"
import { useNavigate, useLocation } from "react-router-dom"

import DateTimePicker from "react-datetime-picker"

import {
  collection,
  addDoc,
  Timestamp,
  updateDoc,
  doc,
} from "firebase/firestore"

import { UserAuth } from "../../Context/AuthContext"
import { useTranslation } from "react-i18next"

import SearchField from "../SearchField/SearchField"
import Button from "../../UITools/Button"

const AddAppointments = (props) => {
  const [carers, setCarers] = useState([])
  const [selectedPatient, setSelectedPatient] = useState(null)
  const [addedAppointment, setAddedApointment] = useState("")
  const appointedToRef = useRef("")
  const [appointmentStartDate, onChangeAppointmentStartDate] = useState(
    new Date(props.scheduler.state.start.value)
  )

  const [appointmentEndDate, onChangeAppointmentEndDate] = useState(
    new Date(props.scheduler.state.end.value)
  )

  const appointmentReasonRef = useRef("")
  const appointmentStatusRef = useRef("")

  const location = useLocation()
  // const { state } = useLocation()
  // const { patient } = state
  const navigate = useNavigate()
  const { t } = useTranslation("addAppointment")
  const { userData, getEmployeesOfClinic, db } = UserAuth()

  const sendDataToParent = async (nameOfThePatient) => {
    setSelectedPatient(nameOfThePatient)
  }

  const fetchEmployeesOfClinic = async () => {
    return await getEmployeesOfClinic(userData.clinicID)
  }

  const handleAddAppointmentButtonPress = async () => {
    try {
      const appointmentInfo = {
        appointedPerson: selectedPatient,
        appointedTo: appointedToRef.current.value,
        date: appointmentStartDate,
        duration: appointmentEndDate - appointmentStartDate,
        reason: appointmentReasonRef.current.value,
        status: t(appointmentStatusRef.current.value),
        createdAt: Timestamp.now(),
      }

      const appointmentsRef = collection(
        db,
        "customers/",
        userData.customerID,
        "/clinics/",
        userData.clinicID,
        "/appointments"
      )

      const newAppointmentRef = await addDoc(appointmentsRef, appointmentInfo)
      await updateDoc(newAppointmentRef, { id: newAppointmentRef.id })
      setAddedApointment(newAppointmentRef.id)
      props.parentCallback(newAppointmentRef.id)

      if (location.pathname === "/addAppointment") {
        navigate("/dashboard")
      } else {
        console.log(newAppointmentRef)
        console.log(addedAppointment)
        props.scheduler.close()
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleUpdateEditedAppointment = async () => {
    const appointmentInfo = {
      appointedPerson: selectedPatient,
      appointedTo: appointedToRef.current.value,
      date: appointmentStartDate,
      duration: appointmentEndDate - appointmentStartDate,
      reason: appointmentReasonRef.current.value,
      status: t(appointmentStatusRef.current.value),
      createdAt: Timestamp.now(),
    }
    console.log(appointmentInfo)
    const appointmentsRef = doc(
      db,
      "customers/",
      userData.customerID,
      "/clinics/",
      userData.clinicID,
      "/appointments/",
      props.scheduler.edited.event_id
    )

    await updateDoc(appointmentsRef, appointmentInfo)
    setAddedApointment(props.scheduler.edited.event_id)
    props.parentCallback(Date.now())
    props.scheduler.close()
  }

  const handleCancelButtonPress = async () => {
    try {
      if (location.pathname === "/addAppointment") {
        navigate("/dashboard")
      } else {
        props.scheduler.close()
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchEmployeesOfClinic().then((data) => setCarers(data))

    //eslint-disable-next-line
  }, [userData, addedAppointment])

  return (
    <div className='flex flex-col h-full w-full'>
      <div className='flex w-full h-full items-center bg-[#f9faff] text-slate-700  flex-col '>
        <div className='flex mt-10  h-1/4 flex-col w-3/4'>
          <div className='items-center drop-shadow-md font-bold text-3xl'>
            {t("Add Appointment")}
          </div>
          <div className='w-full flex flex-col'>
            <SearchField
              page='appointment'
              sendDataToParent={sendDataToParent}
              pHolder={selectedPatient}
            />
          </div>
          <div className='flex items-start justify-start mt-10 '>
            <div className='flex flex-col mr-20'>
              <div className='font-semibold  text-slate-700'>
                {t("Start Date")}
              </div>
              <DateTimePicker
                onChange={onChangeAppointmentStartDate}
                value={appointmentStartDate}
              />
              <div className='font-semibold  text-slate-700'>
                {t("End Date")}
              </div>
              <DateTimePicker
                onChange={onChangeAppointmentEndDate}
                value={appointmentEndDate}
              />
            </div>
            <div className='flex flex-col mr-20'>
              <div className='font-semibold  text-slate-700'>{t("Status")}</div>
              <select
                className='bg-[#f9faff]'
                name='gender'
                id='gender'
                ref={appointmentStatusRef}
              >
                <option>{t("Waiting")}</option>
                <option>{t("Completed")}</option>
                <option>{t("Cancelled")}</option>
              </select>
            </div>
            <div className='flex flex-col mr-20'>
              <div className='font-semibold  text-slate-700'>{t("Reason")}</div>
              <select
                className='bg-[#f9faff]'
                name='gender'
                id='gender'
                ref={appointmentReasonRef}
              >
                <option>{t("Aid Experience")}</option>
                <option>{t("Monthly Control 1")}</option>
                <option>{t("Monthly Control 2")}</option>
                <option>{t("Hearing Test")}</option>
              </select>
            </div>
            <div className='flex flex-col mr-20'>
              <div className='font-semibold  text-slate-700'>{t("Carer")}</div>
              <select
                className='bg-[#f9faff]'
                name='gender'
                id='gender'
                ref={appointedToRef}
              >
                {carers.map((carer, i) => {
                  return (
                    <option key={i}>{carer.name + " " + carer.surname}</option>
                  )
                })}
              </select>
            </div>
          </div>
        </div>
        <div className='flex h-1/4 justify-evenly mt-10 items-center w-full'>
          <div className='w-[120px]'>
            <Button
              label={t("Cancel")}
              onClick={handleCancelButtonPress}
              addCSS={
                "flex justify-center items-center bg-[#eb5656] hover:bg-[#eb5656]"
              }
            />
          </div>
          <div className='w-[120px]'>
            <Button
              label={t("Save")}
              onClick={
                props.scheduler.edited
                  ? handleUpdateEditedAppointment
                  : handleAddAppointmentButtonPress
              }
              addCSS={
                "flex items-center justify-center bg-green-500 hover:bg-[#273169]"
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddAppointments
