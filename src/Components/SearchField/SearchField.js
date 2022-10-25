import { useRef, useState } from "react"

import { FiSearch } from "react-icons/fi"

import { useTranslation } from "react-i18next"

import { UserAuth } from "../../Context/AuthContext"

const SearchField = (props) => {
  const [foundPatients, setFoundPatients] = useState([])
  const { userData, searchResults } = UserAuth()
  const searchTextRef = useRef("")
  const { t } = useTranslation("dashboard")

  const findPatients = async () => {
    const hasNumber = /\d/
    const numberCheck = hasNumber.test(searchTextRef.current.value)

    if (searchTextRef.current.value.length > 0) {
      const usersfound = await searchResults(
        userData.customerID,
        userData.clinicID,
        searchTextRef.current.value,
        numberCheck
      )
      return usersfound
    } else {
      return []
    }
  }

  return (
    <div className=''>
      <div
        className={
          foundPatients.length > 0
            ? "bg-white rounded-t-3xl flex justify-center h-9 items-center w-[400px] "
            : "bg-white rounded-3xl flex justify-center h-9 items-center w-[400px] "
        }
      >
        <input
          ref={searchTextRef}
          onChange={() => findPatients().then((data) => setFoundPatients(data))}
          placeholder={t("Search patients...")}
          className='w-full h-9 italic focus:outline-none rounded-l-3xl px-5 text-[#1d2431]'
        />
        <FiSearch color='#1d2431' className='h-full mr-4' size={34} />
      </div>
      <div className='absolute drop-shadow-md w-[400px]'>
        {foundPatients.map((patient, i) => {
          return (
            <div
              key={i}
              className='flex hover:bg-slate-200  items-center text-slate-700 bg-white h-10 '
            >
              {patient.name + " " + patient.surname}
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default SearchField
