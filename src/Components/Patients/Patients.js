import { useState } from "react"

import { useTranslation } from "react-i18next"
import { FiUserPlus } from "react-icons/fi"

import PatientsList from "./PatientsList"
import TopBar from "../TopBar/TopBar"
import AddPatient from "./AddPatient"
import PatientOverview from "./PatientOverview"

import "./Patients.css"

const Patients = () => {
  const [newPatientForm, setNewPatientForm] = useState(false)
  const [focusedPatient, setFocusedPatient] = useState({})

  const { t } = useTranslation("dashboard")
  return (
    <div className='patients-cointainer'>
      <TopBar pholder={t("Search patients...")} />
      <div className='patients-body'>
        <div className='patients-body-patient-list'>
          <div className='patients-patients-list-container'>
            <div
              onClick={() => {
                setNewPatientForm(true)
              }}
              className='patients-add-patient-btn'
            >
              <FiUserPlus size={24} stroke='#fff' className='' /> Kullanıcı Ekle
            </div>
            <PatientsList
              focusedPatient={(patient) => {
                setFocusedPatient(patient)
              }}
            />
          </div>
        </div>
        <div className='patients-body-overview'>
          <PatientOverview
            focusedPatientData={focusedPatient}
            patientDeleted={(confirm) => {
              setFocusedPatient(confirm)
            }}
          />
        </div>
      </div>
      {newPatientForm ? (
        <div className='add-patient-form-container'>
          <AddPatient
            buttonClick={() => {
              setNewPatientForm(false)
            }}
          />
        </div>
      ) : null}
    </div>
  )
}

export default Patients
