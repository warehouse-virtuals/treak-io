import { FirebaseActions } from "../../Context/FirebaseContext"
import { ThemeState } from "../../Context/ThemeContext"
import { useState, useEffect } from "react"
import { FiUserPlus } from "react-icons/fi"

import PatientOverview from "./PatientOverview"
import PatientsList from "./PatientsList"
import TabMenu from "../TabMenu/TabMenu"
import TopBar from "../TopBar/TopBar"
import AddPatient from "./AddPatient"

import "./Patients.css"

const Patients = () => {
  const [newPatientForm, setNewPatientForm] = useState(false)
  const [focusedPatient, setFocusedPatient] = useState({})
  const { setBackgroundDim } = ThemeState()
  const [activeTab, setActiveTab] = useState("patients")
  const { currentPatients } = FirebaseActions()

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setFocusedPatient("")
    }
  }

  useEffect(() => {
    focusedPatient.id ? setBackgroundDim(true) : setBackgroundDim(false)
    console.log(focusedPatient)
  }, [focusedPatient, currentPatients])

  return (
    <div className='patients-cointainer'>
      <TopBar />
      <div className='patients-body' onKeyDown={handleKeyDown} tabIndex='0'>
        <div className='patient-tabmenu-container'>
          <TabMenu
            tabs={[
              { title: "Tüm Kullanıcılar", tabName: "patients" },
              { title: "Tıbbi Kayıtlar", tabName: "medicalReports" },
              { title: "Odyogramlar", tabName: "audiograms" },
            ]}
            tabSetter={(tab) => setActiveTab(tab)}
            activeTab={activeTab}
            path={true}
          />
        </div>

        <div className='patients-body-list-container'>
          {activeTab === "patients" ? (
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
          ) : null}
        </div>
      </div>

      <div
        className={`patients-body-overview ${
          focusedPatient.id ? "slide-in" : null
        }`}
        onKeyDown={handleKeyDown}
      >
        <PatientOverview
          focusedPatient={focusedPatient}
          close={() => setFocusedPatient("")}
          patientDeleted={(deletedPatient) => {
            setFocusedPatient(deletedPatient)
          }}
        />
      </div>

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
