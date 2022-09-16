import { FiSearch } from "react-icons/fi"
import { useTranslation } from "react-i18next"

const SearchField = (props) => {
  const { t } = useTranslation("dashboard")
  return (
    <div className="ml-10 flex h-full justify-center items-center w-1/4 ">
      <input
        placeholder={t("Search patients...")}
        className="w-full bg-[#ffffff] h-14 italic focus:outline-none rounded-l-3xl px-5 text-black"
      ></input>
      <FiSearch
        color="#20295a"
        className="h-14 pr-2 bg-[#ffffff] rounded-r-3xl "
        size={40}
      />
    </div>
  )
}
export default SearchField
