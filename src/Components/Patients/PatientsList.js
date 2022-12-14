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

  const { currentPatients } = UserAuth()
  const { t } = useTranslation("patients")

  useEffect(() => {
    setPatients(currentPatients)
    setSpinner(false)
  }, [currentPatients])

  return (
    <div className='patient-table-container'>
      {spinner ? <Spinner /> : null}
      <table className='patient-table'>
        <tbody>
          <tr>
            <th>{t("NAME")}</th>
            <th>{t("PHONE")}</th>
            <th>{t("GENDER")}</th>
            <th>{t("SSN")}</th>
            <th>{t("DOB")}</th>
          </tr>
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
