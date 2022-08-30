import { FiSearch } from "react-icons/fi"

const SearchField = () => {
  return (
    <div className="flex h-full justify-center items-center w-1/3  drop-shadow-[0_5px_5px_rgba(147,197,253,0.25)]">
      <input
        placeholder="Search appointments, patients..."
        className="w-full bg-[#ffffff] h-14 focus:outline-none rounded-l-3xl px-5 text-black"
      ></input>
      <FiSearch
        color="#6d71f9"
        className="h-full bg-[#ffffff] rounded-r-3xl pr-3"
        size={40}
      />
    </div>
  )
}
export default SearchField
