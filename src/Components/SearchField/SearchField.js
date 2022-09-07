import { FiSearch } from "react-icons/fi"

const SearchField = () => {
  return (
    <div className="flex items-center mb-12">
      <div className="flex h-full justify-center items-center w-2/3  drop-shadow-[0_5px_5px_rgba(147,197,253,0.25)]">
        <input
          placeholder="Search patients"
          className="w-full bg-[#ffffff] h-14 focus:outline-none rounded-l-3xl px-5 text-black"
        ></input>
        <FiSearch
          color="#4259c1"
          className="h-full bg-[#ffffff] rounded-r-3xl pr-3"
          size={40}
        />
      </div>
    </div>
  )
}
export default SearchField
