import "./PatientsList.css"

import { toDate } from "date-fns"
import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"
import { UserAuth } from "../../Context/AuthContext"

const PatientsList = (props) => {
  const [patients, setPatients] = useState([])
  const { getPatients, userData } = UserAuth()
  const { t } = useTranslation("patients")

  const fetchPatientData = async () => {
    return await getPatients(userData.customerID, userData.clinicID)
  }

  useEffect(() => {
    fetchPatientData().then((data) => setPatients(data))
    //eslint-disable-next-line
  }, [])

  const tbodyData = []
  patients.forEach((patient, i) => {
    const dateOfBirth = toDate(patient.DOB.seconds * 1000).toLocaleDateString()
    const obj = {
      id: patient.id,
      patientData: { ...patient, DOB: dateOfBirth },
      items: [
        patient.name + " " + patient.surname,
        patient.SSN,
        patient.phone,
        dateOfBirth,
        patient.isMale ? "Erkek" : "Kadın",
      ],
    }
    tbodyData.push(obj)
  })

  const theadData = [
    `${t("NAME")}`,
    `${t("SSN")}`,
    `${t("PHONE")}`,
    `${t("DOB")}`,
    `${t("GENDER")}`,
  ]

  const TableHeadItem = ({ item }) => {
    return (
      <div className='patients-table-head-item '>
        {item.map((h, index) => {
          return (
            <div key={index} className=''>
              {h}
            </div>
          )
        })}
      </div>
    )
  }
  const TableRow = ({ data, patient }) => {
    return (
      <div
        className='patients-table-row-item'
        onClick={() => {
          props.focusedPatient(patient)
        }}
      >
        {data.map((item, index) => {
          return (
            <div className='patients-table-row-item-content' key={index}>
              {item}
            </div>
          )
        })}
      </div>
    )
  }
  const Table = ({ theadData, tbodyData }) => {
    return (
      <div className='patients-table-container'>
        <div className='patients-table-head-container'>
          <TableHeadItem item={theadData} />
        </div>
        <div className=''>
          {tbodyData.map((item) => {
            return (
              <TableRow
                key={item.id}
                patient={item.patientData}
                data={item.items}
              />
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className='patient-list-container'>
      <div className='patient-list-header-container'>
        <Table theadData={theadData} tbodyData={tbodyData} />
      </div>
    </div>
  )
}

export default PatientsList
