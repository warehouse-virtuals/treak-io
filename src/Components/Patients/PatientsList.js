import { toDate } from "date-fns"
import { useState, useEffect } from "react"
import { UserAuth } from "../../Context/AuthContext"

const PatientsList = () => {
  const [patients, setPatients] = useState([])
  const { getPatients, userData } = UserAuth()

  useEffect(() => {
    const fetchPatientData = async () => {
      const data = await getPatients(userData.customerID, userData.clinicID)
      const stateSetter = (data) => {
        setPatients(data)
      }
      await stateSetter(data)
    }
    fetchPatientData()
    //eslint-disable-next-line
  }, [])
  console.log(patients)

  const tbodyData = []
  patients.forEach((patient, i) => {
    const dateOfBirth = toDate(patient.DOB.seconds * 1000).toLocaleDateString()

    const obj = {
      id: i,
      items: [
        patient.name + " " + patient.surname,
        dateOfBirth,
        patient.isMale ? "Erkek" : "Kadın",
      ],
    }
    tbodyData.push(obj)
  })

  const theadData = ["NAME", "DATE OF BIRTH", "GENDER"]

  // const tbodyData = [
  //   {
  //     id: "1",
  //     items: ["Mıstık Fıstık", "01 Ocak 1993", "Erkek", ],
  //   },
  //   {
  //     id: "2",
  //     items: ["Denis Penis", "21 Aralık 1994", "Erkek", ],
  //   },
  //   {
  //     id: "3",
  //     items: ["Işıl Mışıl", "12 Temmuz 1995", "Kadın", ],
  //   },
  // ]

  const TableHeadItem = ({ item }) => {
    return (
      <div className="pl-3 gap-10 grid grid-cols-4 mb-3 ">
        {item.map((h, index) => {
          return (
            <div key={index} className="">
              {h}
            </div>
          )
        })}
      </div>
    )
  }
  const TableRow = ({ data }) => {
    return (
      <div className="grid border-r-8 border-green-400 pl-5 gap-10 items-center grid-cols-4 text-sm mb-1 h-14 rounded-2xl drop-shadow-sm bg-white">
        {data.map((item) => {
          return (
            <div className="border-r-2 border-slate-100 " key={item}>
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
        <div className="text-[#c4c8d5] text-sm font-semibold">
          <TableHeadItem item={theadData} />
        </div>
        <div className="">
          {tbodyData.map((item) => {
            return <TableRow key={item.id} data={item.items} />
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="">
      <Table
        theadData={theadData}
        tbodyData={tbodyData}
        customClass="w-full font-normal "
      />
    </div>
  )
}

export default PatientsList
