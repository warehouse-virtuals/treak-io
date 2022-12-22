import "./PatientsList.css"

import { format } from "date-fns"
import { tr } from "date-fns/locale"
import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"
import { UserAuth } from "../../Context/FirebaseContext"

import Spinner from "../Spinner/Spinner"

const PatientsList = (props) => {
  const [patients, setPatients] = useState([])
  const [spinner, setSpinner] = useState(true)

  const { currentPatients, getMorePatients, userData, isEndOfPatientList } =
    UserAuth()
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
    setSpinner(false)
  }, [currentPatients, isEndOfPatientList])

  return (
    <div className='patient-table-container' onScroll={handleScroll}>
      {spinner ? <Spinner /> : null}
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
                  props.focusedPatient(patient)
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
