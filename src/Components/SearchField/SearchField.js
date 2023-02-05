import { useRef, useState, useEffect } from "react"
import "./SearchField.css"

import {
  FiX,
  FiEdit,
  FiUsers,
  FiSearch,
  FiCalendar,
  FiMessageCircle,
} from "react-icons/fi"

import { useTranslation } from "react-i18next"

import { UserAuth } from "../../Context/UserContext"
import { FirebaseActions } from "../../Context/FirebaseContext"

import { UIToolsStatus } from "../../Context/UIToolsStatusContext"

const SearchField = ({
  setSelectedPatient,
  selectedPatient,
  expandSearchBar,
}) => {
  const [foundPatients, setFoundPatients] = useState([])
  const [timer, setTimer] = useState(null)

  const { userData } = UserAuth()
  const { setExpandSearchBar } = UIToolsStatus()
  const { searchPatientsResult } = FirebaseActions()

  const searchTextRef = useRef("")

  const { t } = useTranslation("dashboard")

  const findPatients = async () => {
    const hasNumber = /\d/
    const numberCheck = hasNumber.test(searchTextRef.current.value)

    if (searchTextRef.current.value.length > 0) {
      const usersfound = await searchPatientsResult(
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

  const handleOnChangeSearchInput = () => {
    findPatients().then((data) => setFoundPatients(data))
  }

  const foundPatientRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        foundPatientRef.current &&
        !foundPatientRef.current.contains(event.target)
      ) {
        setFoundPatients("")
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    } // eslint-disable-next-line
  }, [foundPatientRef])

  const changeDelay = (change) => {
    if (timer) {
      clearTimeout(timer)
      setTimer(null)
    }
    setTimer(
      setTimeout(() => {
        console.log("bekledik 400ms")
        handleOnChangeSearchInput()
      }, 400)
    )
  }

  return (
    <div
      className={`searchfield-container ${
        foundPatients.length > 0 ? "found" : null
      }`}
    >
      <div className='search-bar'>
        {expandSearchBar ? (
          <input
            className='searchfield-input'
            ref={searchTextRef}
            onClick={() => {
              setSelectedPatient("")
              searchTextRef.current.value = ""
            }}
            onChange={(e) => changeDelay(e.target.value)}
            placeholder={
              selectedPatient
                ? selectedPatient.name + " " + selectedPatient.surname
                : t("Search patients...")
            }
          />
        ) : null}

        <div
          className='search-icon'
          style={expandSearchBar ? null : { background: "var(--c-bg-white)" }}
          onClick={() =>
            expandSearchBar === false ? setExpandSearchBar(true) : null
          }
        >
          <FiSearch size={24} />
        </div>
        {expandSearchBar ? (
          <div
            className='close-icon'
            onClick={() =>
              expandSearchBar === true ? setExpandSearchBar(false) : null
            }
          >
            <FiX size={24} />
          </div>
        ) : null}
      </div>
      {foundPatients.length > 0 ? (
        <div className='found-patient-container' ref={foundPatientRef}>
          {foundPatients.map((patient, i) => {
            return (
              <div
                className='found-patient'
                key={i}
                onClick={() => {
                  setSelectedPatient(patient)
                  searchTextRef.current.value =
                    patient.name + " " + patient.surname
                  setFoundPatients([])
                }}
              >
                <div className='found-patient-name-container'>
                  <div className='make-appt-btn-container'>
                    <FiUsers className='make-appt-btn' size={16} />
                  </div>
                  <div className='found-patient-name'>
                    {patient.name + " " + patient.surname}
                  </div>
                </div>
                <div className='found-patient-btns-container'>
                  <div className='found-patient-make-appt-btn'>
                    <FiCalendar className='make-appt-btn' size={16} />
                  </div>
                  <div className='found-patient-msg-btn'>
                    <FiMessageCircle className='make-msg-btn' size={16} />
                  </div>
                  <div className='found-patient-edit-btn'>
                    <FiEdit className='make-edit-btn' size={16} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
export default SearchField
