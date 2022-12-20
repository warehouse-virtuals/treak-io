import { FiSearch } from "react-icons/fi"

import "./SearchContact.css"

function SearchContact() {
  return (
    <div className='search-contact-bar'>
      <input className='' placeholder='Sohbet ara falan' />
      <div className='search-contact-icon'>
        <FiSearch className='' size={22} />
      </div>
    </div>
  )
}

export default SearchContact
