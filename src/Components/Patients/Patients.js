import { useState, useEffect } from "react"

import { FirebaseActions } from "../../Context/FirebaseContext"

import { useTranslation } from "react-i18next"
import { FiUserPlus } from "react-icons/fi"

import PatientOverview from "./PatientOverview"
import PatientsList from "./PatientsList"
import AddPatient from "./AddPatient"
import TopBar from "../TopBar/TopBar"

import "./Patients.css"

const Patients = () => {
  const [newPatientForm, setNewPatientForm] = useState(false)
  const [focusedPatient, setFocusedPatient] = useState({})
  const { currentPatients } = FirebaseActions()

  const { t } = useTranslation("dashboard")

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setFocusedPatient("")
    }
  }

  useEffect(() => {}, [focusedPatient, currentPatients])

  return (
    <div className='patients-cointainer'>
      <TopBar pholder={t("Search patients...")} />
      <div className='patients-body' onKeyDown={handleKeyDown} tabIndex='0'>
        <div className='patients-body-navbar'>
          <div className='patients-body-navbar-tabs'>
            <div className='patients-body-navbar-tab-active'>
              Tüm Kullanıcılar
            </div>
            <div className='patients-body-navbar-tab'>Raporlar</div>
          </div>
        </div>
        <div className='patients-body-patient-list'>
          <div className='patients-patients-list-container'>
            <div className='patients-patients-list'>
              <PatientsList
                focusedPatient={(patient) => {
                  setFocusedPatient(patient)
                }}
              />
            </div>
          </div>
          <div className='patients-patients-list-footer'>
            <div className='patients-add-patient-btn-container'>
              <div
                onClick={() => {
                  setNewPatientForm(true)
                }}
                className='patients-add-patient-btn'
              >
                <FiUserPlus size={22} stroke='#fff' className='' /> KULLANICI
                EKLE
              </div>
            </div>
            <div className='patients-patients-list-footer'>
              Listelenen Kullanıcı Sayısı: {currentPatients.length}
            </div>
          </div>
        </div>
      </div>
      {focusedPatient.name ? (
        <div
          className='patients-body-overview'
          onKeyDown={handleKeyDown}
          tabIndex='0'
        >
          <PatientOverview
            focusedPatientData={focusedPatient}
            close={() => setFocusedPatient("")}
            patientDeleted={(confirm) => {
              setFocusedPatient(confirm)
            }}
          />
        </div>
      ) : null}
      {newPatientForm ? (
        <div className='add-patient-form-container'>
          <AddPatient
            closeForm={() => {
              setNewPatientForm(false)
            }}
          />
        </div>
      ) : null}
    </div>
  )
}

export default Patients
