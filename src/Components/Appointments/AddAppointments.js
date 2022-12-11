import React, { useState, useEffect, useRef } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { FiCalendar, FiX } from "react-icons/fi"

import DateTimePicker from "react-datetime-picker"
// import DateTimePicker from "react-datetime-picker/dist/entry.nostyle"
import "./AddAppointment.css"
import "./DateTimePicker.css"
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

const AddAppointment = ({ newAppointmentDay, parentCallback }) => {
  const [carers, setCarers] = useState([])
  const [selectedPatient, setSelectedPatient] = useState(null)
  const [addedAppointment, setAddedApointment] = useState("")
  const appointedToRef = useRef("")
  const [appointmentStartDate, onChangeAppointmentStartDate] = useState(
    new Date(newAppointmentDay)
  )

  const [appointmentEndDate, onChangeAppointmentEndDate] = useState(
    new Date(newAppointmentDay)
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
      parentCallback()

      if (location.pathname === "/addAppointment") {
        navigate("/dashboard")
        console.log("close olması lazım ")
      } else {
      }
    } catch (error) {
      console.log(error)
    }
  }
  // const handleUpdateEditedAppointment = async () => {
  //   const appointmentInfo = {
  //     appointedPerson: selectedPatient,
  //     appointedTo: appointedToRef.current.value,
  //     date: appointmentStartDate,
  //     duration: appointmentEndDate - appointmentStartDate,
  //     reason: appointmentReasonRef.current.value,
  //     status: t(appointmentStatusRef.current.value),
  //     createdAt: Timestamp.now(),
  //   }
  //   console.log(appointmentInfo)
  //   const appointmentsRef = doc(
  //     db,
  //     "customers/",
  //     userData.customerID,
  //     "/clinics/",
  //     userData.clinicID,
  //     "/appointments/",
  //     props.scheduler.edited.event_id
  //   )

  //   await updateDoc(appointmentsRef, appointmentInfo)
  //   setAddedApointment(props.scheduler.edited.event_id)
  //   parentCallback(Date.now())
  //   props.scheduler.close()
  // }

  const handleCancelButtonPress = async () => {
    parentCallback()
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
            <div className='add-appt-input-title'>Kullanıcı:</div>
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
              <div className='add-appt-input-title'>{t("Start")}</div>
              <DateTimePicker
                onChange={onChangeAppointmentStartDate}
                value={appointmentStartDate}
                calendarIcon={<FiCalendar color='#ccc' />}
                clearIcon={<FiX color='#ccc' />}
                disableClock={true}
              />
            </div>
            <div className='add-appt-dates'>
              <div className='add-appt-input-title'>{t("End")}</div>
              <DateTimePicker
                onChange={onChangeAppointmentEndDate}
                value={appointmentEndDate}
                calendarIcon={<FiCalendar color='#ccc' />}
                clearIcon={<FiX color='#ccc' />}
                disableClock={true}
              />
            </div>
          </div>
          <div className='add-appt-triplets-container'>
            <div className='add-appt-triplets'>
              <div className='add-appt-input-title'>{t("Reason")}</div>
              <select
                className='add-appt-dropdown'
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
            <div className='add-appt-triplets'>
              <div className='add-appt-input-title'>{t("Status")}</div>
              <select
                className='add-appt-dropdown'
                name='gender'
                id='gender'
                ref={appointmentStatusRef}
              >
                <option>{t("Waiting")}</option>
                <option>{t("Completed")}</option>
                <option>{t("Cancelled")}</option>
              </select>
            </div>

            <div className='add-appt-triplets'>
              <div className='add-appt-input-title'>{t("Carer")}</div>

              <select
                className='add-appt-dropdown'
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
        <div className='add-appt-footer'>
          <div
            className='add-appt-btn-container-cancel'
            onClick={handleCancelButtonPress}
          >
            <Button label={t("Cancel")} />
          </div>
          <div
            className='add-appt-btn-container-submit'
            onClick={handleAddAppointmentButtonPress}
          >
            <Button label={t("Save")} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddAppointment
