import { useState, useRef, useEffect } from "react"

import { FiSearch } from "react-icons/fi"

import { UserAuth } from "../../Context/FirebaseContext"

import "./SearchContact.css"

function SearchContact() {
  const [timer, setTimer] = useState(null)

  const searchTextRef = useRef("")

  const { userData, searchChatResults, chatResults, setChatResults } =
    UserAuth()

  const findContact = async () => {
    const hasNumber = /\d/
    const numberCheck = hasNumber.test(searchTextRef.current.value)

    if (searchTextRef.current.value.length > 0) {
      setChatResults([])
      await searchChatResults(
        userData.customerID,
        searchTextRef.current.value,
        numberCheck
      )
    }
  }

  const handleOnClickOutside = (event) => {
    if ("found-patient" !== event.target.className && chatResults.length > 0) {
      setChatResults([])
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleOnClickOutside, true)
    return () => {
      document.removeEventListener("click", handleOnClickOutside, true)
    }
    // eslint-disable-next-line
  }, [chatResults])

  const changeDelay = (change) => {
    if (timer) {
      clearTimeout(timer)
      setTimer(null)
    }
    setTimer(
      setTimeout(() => {
        console.log("bekledik 400ms")
        findContact()
      }, 400)
    )
  }

  return (
    <div className='search-contact-bar'>
      <input
        className=''
        ref={searchTextRef}
        onClick={() => (searchTextRef.current.value = "")}
        onChange={(e) => changeDelay(e.target.value)}
        placeholder='Sohbet ara falan'
      />
      <div className='search-contact-icon'>
        <FiSearch className='' size={22} />
      </div>
    </div>
  )
}

export default SearchContact
