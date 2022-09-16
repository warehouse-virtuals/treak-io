import { useTranslation } from "react-i18next"
import { FiUploadCloud } from "react-icons/fi"
import TextInput from "../../UITools/TextInput"
import TopBar from "../TopBar/TopBar"

const Repair = (props) => {
  const { t } = useTranslation("repair")
  return (
    <div className="flex flex-col h-full w-full">
      <TopBar pholder={t("Search patients...")} />
      <div className=" flex pl-10 items-center rounded-tl-3xl  bg-[#f9faff]  w-full h-full flex-col ">
        <div className="flex flex-col w-full">
          <div className="flex items-center h-28 text-4xl font-semibold drop-shadow-lg ">
            {t("Repair/Maintenance Form")}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full mb-5 h-full border-dashed border-2 rounded-xl text-[#9CA3AF] border-gray-300 ">
          <FiUploadCloud className="mb-3" color="#82878f" size={50} />
          {t("Upload Images")}
        </div>
        <div className="flex flex-row w-full justify-between  text-bold">
          <TextInput
            onInput={null}
            inputRef={null}
            type={"text"}
            placeholder={t("ID")}
            addCSS="w-1/2"
          />

          <TextInput
            onInput={null}
            inputRef={null}
            type={"text"}
            placeholder={t("Name/Surname")}
            addCSS="w-1/2"
          />
        </div>
        <div className="flex w-full justify-between mb-5 ">
          <TextInput
            onInput={null}
            inputRef={null}
            type={"text"}
            placeholder={t("Device Serial No")}
            addCSS="w-1/2 "
          />

          <TextInput
            onInput={null}
            inputRef={null}
            type={"text"}
            placeholder={t("Side")}
            addCSS="w-1/2"
          />
        </div>
        <div className="flex w-full justify-between  ">
          <TextInput
            onInput={null}
            inputRef={null}
            type={"text"}
            placeholder={t("Warranty Start Date")}
            addCSS="w-1/2"
          />
          <TextInput
            onInput={null}
            inputRef={null}
            type={"text"}
            placeholder={t("Warranty Period")}
            addCSS="w-1/2"
          />
        </div>
        <div className="flex w-full justify-between mb-5 ">
          <TextInput
            onInput={null}
            inputRef={null}
            type={"text"}
            placeholder={t("Device Name")}
            addCSS="w-1/2"
          />{" "}
          <TextInput
            onInput={null}
            inputRef={null}
            type={"text"}
            placeholder={t("Warranty Finish Date")}
            addCSS="w-1/2"
          />
        </div>
        <div className="flex w-full justify-between  ">
          <TextInput
            onInput={null}
            inputRef={null}
            type={"text"}
            placeholder={t("Customer Complaint")}
            addCSS="w-full"
          />
        </div>
        <div className="flex w-full justify-between  ">
          <TextInput
            onInput={null}
            inputRef={null}
            type={"text"}
            placeholder={t("Findings")}
            addCSS="w-full"
          />
        </div>
        <div className="flex w-full h-full">
          <div className="flex justify-center flex-col w-1/2 h-full px-10  ">
            <div className=" text-gray-400">{t("Carer")}:</div>
            <div className="ml-10 text-2xl">Nazlı Aydın</div>
          </div>
          <div className="flex flex-col justify-center items-center w-1/2 h-full  ">
            <div className="hidden items-center text-[white] lg:flex w-[200px] h-[50px] justify-center select-none m-4 rounded-3xl bg-[#fa9954] ">
              {t("Submit")}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Repair
