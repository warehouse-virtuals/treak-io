import SearchField from "../SearchField/SearchField"
const Topbar = () => {
  return (
    <div className="flex justify-between items-center mb-12">
      <SearchField />
      <div className="flex justify-center items-center w-28 h-9 bg-[#11ce8c] hover:bg-[#11a974] text-white font-bold rounded-2xl  text-sm select-none drop-shadow-[0_5px_5px_rgba(147,197,253,0.25)]">
        + Add Patient
      </div>
    </div>
  )
}

export default Topbar
