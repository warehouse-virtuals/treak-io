import "./PatientsList.css"
import { FiPlus } from "react-icons/fi"
import { toDate } from "date-fns"
import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"
import { UserAuth } from "../../Context/AuthContext"

import { useNavigate } from "react-router-dom"
import PatientOverview from "./PatientOverview"

const PatientsList = () => {
  const [patients, setPatients] = useState([])
  const [focusedPatient, setFocusedPatient] = useState({})
  const { getPatients, userData } = UserAuth()
  const { t } = useTranslation("patients")
  const navigate = useNavigate()

  const fetchPatientData = async () => {
    return await getPatients(userData.customerID, userData.clinicID)
  }

  useEffect(() => {
    fetchPatientData().then((data) => setPatients(data))
    //eslint-disable-next-line
  }, [focusedPatient])

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
  const handleAddPatientButtonClick = async () => {
    try {
      navigate("/addPatient")
      console.log("Clicked Add Button")
    } catch (error) {
      console.log(error.message)
    }
  }

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
        onClick={() => setFocusedPatient(patient)}
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
  const Table = ({ theadData, tbodyData, customClass }) => {
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

  console.log(focusedPatient)
  return (
    <div className='patient-list-container'>
      <div className='patient-list-header-container'>
        <div
          onClick={handleAddPatientButtonClick}
          className='patients-add-patient-btn'
        >
          <FiPlus size={30} stroke='#35d8ac' className='' /> Kullanıcı Ekle
        </div>
        <Table
          theadData={theadData}
          tbodyData={tbodyData}
          customClass='w-full font-normal '
        />
      </div>
      <div className='patients-overview-container'>
        <PatientOverview
          focusedPatientData={focusedPatient}
          patientDeleted={(confirm) => {
            setFocusedPatient(confirm)
          }}
        />
      </div>
    </div>
  )
}

export default PatientsList
