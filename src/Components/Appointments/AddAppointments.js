import React, { useState, useEffect, useRef } from "react"
import "./AddAppointment.css"
import { useNavigate, useLocation } from "react-router-dom"

import DateTimePicker from "react-datetime-picker"
// import DateTimePicker from "react-datetime-picker/dist/entry.nostyle"
// import "./DateTimePicker.css"
// import "./Calendar.css"
// import "./Clock.css"

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

const AddAppointment = (props) => {
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
      console.log("sa", selectedPatient)
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
    <div className='add-appt-container'>
      <div className='add-appt'>
        <div className='add-appt-title'>{t("Add Appointment")}</div>
        <div className='add-appt-body'>
          <div className='add-appt-search-container'>
            Kullanıcı:
            <SearchField
              page='appointment'
              selectedPatientName={(nameOfThePatient) => {
                console.log(nameOfThePatient)
                setSelectedPatient(nameOfThePatient)
              }}
              pHolder={selectedPatient}
            />
          </div>
          <div className='add-appt-date-container'>
            <div className='add-appt-dates'>
              {t("Start")}
              <DateTimePicker
                onChange={onChangeAppointmentStartDate}
                value={appointmentStartDate}
              />
            </div>
            <div className='add-appt-dates'>
              {t("End")}
              <DateTimePicker
                onChange={onChangeAppointmentEndDate}
                value={appointmentEndDate}
              />
            </div>
          </div>
          <div className='add-appt-sns-container'>
            <div className='add-appt-sns'>
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
            <div className='add-appt-sns'>
              <div className=''>{t("Reason")}</div>
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
          </div>
          <div className='add-appt-carer'>
            <div className=''>{t("Carer")}</div>
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
        <div className='add-appt-footer'>
          <div
            className='add-appt-btn-container-cancel'
            onClick={handleCancelButtonPress}
          >
            <Button
              label={t("Cancel")}
              addCSS={
                "flex justify-center items-center bg-[#eb5656] hover:bg-[#eb5656]"
              }
            />
          </div>
          <div
            className='add-appt-btn-container-submit'
            onClick={
              props.scheduler.edited
                ? handleUpdateEditedAppointment
                : handleAddAppointmentButtonPress
            }
          >
            <Button
              label={t("Save")}
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

export default AddAppointment
