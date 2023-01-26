import { useState, useEffect } from "react"

import { format } from "date-fns"
import { tr } from "date-fns/locale"
import { useTranslation } from "react-i18next"

import { UserAuth } from "../../Context/UserContext"
import { FirebaseActions } from "../../Context/FirebaseContext"

import "./PatientsList.css"

const PatientsList = ({ focusedPatient }) => {
  const [patients, setPatients] = useState([])

  const { userData } = UserAuth()

  const { getMorePatients, currentPatients, isEndOfPatientList } =
    FirebaseActions()

  const { t } = useTranslation("patients")

  const handleScroll = (event) => {
    const target = event.target
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      isEndOfPatientList
        ? console.log("Listenin sonu")
        : getMorePatients(userData.customerID, userData.clinicID)
    }
  }

  useEffect(() => {
    setPatients(currentPatients)
  }, [currentPatients, isEndOfPatientList])

  return (
    <div className='patient-table-container' onScroll={handleScroll}>
      <table className='patient-table'>
        <thead>
          <tr>
            <th>{t("NAME")}</th>
            <th>{t("PHONE")}</th>
            <th>{t("GENDER")}</th>
            <th>{t("SSN")}</th>
            <th>{t("DOB")}</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, i) => {
            return (
              <tr
                key={i}
                onClick={() => {
                  focusedPatient(patient)
                }}
              >
                <td>{`${patient.name} ${patient.surname}`}</td>
                <td>{patient.phone}</td>
                <td>{patient.isMale ? "Erkek" : "Kadın"}</td>
                <td>{patient.SSN}</td>
                <td>
                  {format(patient.DOB.toMillis(), "PP", {
                    locale: tr,
                  })}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default PatientsList
