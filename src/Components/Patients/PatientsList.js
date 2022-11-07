import { toDate } from "date-fns"
import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"
import { UserAuth } from "../../Context/AuthContext"
import PatientOverview from "./PatientOverview"

const PatientsList = () => {
  const [patients, setPatients] = useState([])
  const [focusedPatient, setFocusedPatient] = useState({})
  const { getPatients, userData } = UserAuth()
  const { t } = useTranslation("patients")

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

  const TableHeadItem = ({ item }) => {
    return (
      <div className='pl-3 gap-10 grid grid-cols-5 mb-3 '>
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
        className='grid border-r-8 border-green-400  hover:bg-slate-100 transition-all pl-5 gap-10 items-center grid-cols-5 text-sm mb-1 h-14 rounded-2xl drop-shadow-sm bg-white'
        onClick={() => setFocusedPatient(patient)}
      >
        {data.map((item, index) => {
          return (
            <div className='border-r-2 border-slate-100 ' key={index}>
              {item}
            </div>
          )
        })}
      </div>
    )
  }
  const Table = ({ theadData, tbodyData, customClass }) => {
    return (
      <div className={customClass}>
        <div className='text-[#c4c8d5] text-sm font-semibold'>
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
    <div className='flex  justify-around w-full'>
      <div className='flex w-2/3'>
        <Table
          theadData={theadData}
          tbodyData={tbodyData}
          customClass='w-full font-normal '
        />
      </div>
      <div className='flex w-[400px]'>
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
