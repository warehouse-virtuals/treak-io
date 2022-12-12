import "./PatientsList.css"

import { format } from "date-fns"
import { tr } from "date-fns/locale"
import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"
import { UserAuth } from "../../Context/AuthContext"

const PatientsList = (props) => {
  const [patients, setPatients] = useState([])
  const { getPatients, userData } = UserAuth()
  const { t } = useTranslation("patients")

  useEffect(() => {
    const fetchPatientData = async () => {
      return await getPatients(userData.customerID, userData.clinicID)
    }
    fetchPatientData().then((data) => {
      console.log(data)
      setPatients(data)
    })

    //eslint-disable-next-line
  }, [])

  return (
    <div className='patient-table-container'>
      <table className='patient-table'>
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
      </table>
    </div>
  )
}

export default PatientsList
