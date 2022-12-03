import "./PatientsList.css"

import { format } from "date-fns"
import { tr } from "date-fns/locale"
import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"
import { UserAuth } from "../../Context/AuthContext"
import {
  FiUser,
  FiEdit,
  // FiFolder,
  FiCalendar,
  // FiMessageSquare,
  FiTrash,
  FiDelete,
} from "react-icons/fi"

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

  // const theadData = [
  //   `${t("NAME")}`,
  //   `${t("SSN")}`,
  //   `${t("PHONE")}`,
  //   `${t("DOB")}`,
  //   `${t("GENDER")}`,
  // ]

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
        {patients.map((patient) => {
          return (
            <tr
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
