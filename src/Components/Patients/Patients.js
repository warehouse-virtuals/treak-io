import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"

import { FirebaseActions } from "../../Context/FirebaseContext"

import { useTranslation } from "react-i18next"
import { FiUserPlus } from "react-icons/fi"

import PatientOverview from "./PatientOverview"
import PatientsList from "./PatientsList"
import AddPatient from "./AddPatient"
import TopBar from "../TopBar/TopBar"
import TabMenu from "../TabMenu/TabMenu"
import SearchField from "../SearchField/SearchField"

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
      <TopBar />
      <div className='patients-body' onKeyDown={handleKeyDown} tabIndex='0'>
        <TabMenu
          tabs={[
            { title: "Tüm Kullanıcılar", path: "/patients" },
            { title: "Tıbbi Kayıtlar", path: "/patients/medicalReports" },
            { title: "Odyogramlar", path: "/patients/audiograms" },
          ]}
        />

        <div className='patients-body-list-container'>
          <div className='patients-body-patients-list-container'>
            <div className='patients-body-list'>
              <PatientsList
                focusedPatient={(patient) => {
                  setFocusedPatient(patient)
                }}
              />
            </div>
            <div className='patients-body-list-footer'>
              <div className='patients-body-list-button'>
                <div
                  onClick={() => {
                    setNewPatientForm(true)
                  }}
                  className='patients-body-list-add-button'
                >
                  <FiUserPlus size={14} /> Kullanıcı Ekle
                </div>
              </div>
              <div>Listelenen Kullanıcı Sayısı: {currentPatients.length}</div>
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
      {/* {newPatientForm ? (
        <div className='add-patient-form-container'>
          <AddPatient
            closeForm={() => {
              setNewPatientForm(false)
            }}
          />
        </div>
      ) : null} */}
    </div>
  )
}

export default Patients
