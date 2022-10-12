import { FiSearch } from "react-icons/fi"
import { useTranslation } from "react-i18next"

const SearchField = (props) => {
  const { t } = useTranslation("dashboard")
  return (
    <div className="ml-10 bg-white rounded-3xl flex justify-center h-9 items-center w-[400px] ">
      <input
        placeholder={t("Search patients...")}
        className="w-full h-9 italic focus:outline-none rounded-l-3xl px-5 text-[#1d2431]"
      ></input>
      <FiSearch color="#1d2431" className="h-full mr-4" size={34} />
    </div>
  )
}
export default SearchField
