import TextInput from "../../UITools/TextInput"
import { useNavigate } from "react-router-dom"
import Button from "../../UITools/Button"
import { useTranslation } from "react-i18next"

const AddPatient = () => {
  const navigate = useNavigate()
  const { t } = useTranslation("addPatient")
  const handleCancelButtonPress = async () => {
    try {
      navigate("/patients")
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className="flex pt-5 pl-10 justify-center items-center text-slate-700 w-full h-full flex-col ">
      <div className="flex flex-col h-1/2 w-full">
        <div className="flex h-16 items-center drop-shadow-md font-bold text-3xl">
          {t("Personal Information")}
        </div>
        <div className="flex  ">
          <TextInput
            //   inputRef={}
            type={"text"}
            label={t("Name")}
            addCSS="w-[400px] mr-20 border-b-2 placeholder:italic "
          />
          <TextInput
            //   inputRef={}
            type={"text"}
            label={t("Surname")}
            addCSS="w-[400px] mr-20 border-b-2 placeholder:italic "
          />{" "}
          <TextInput
            //   inputRef={}
            type={"text"}
            label={t("ID Number")}
            addCSS="w-[400px] mr-20 border-b-2 placeholder:italic "
          />
        </div>
        <div className="flex w-full items-start justify-start ">
          <TextInput
            //   inputRef={}
            type={"text"}
            label={t("DOB")}
            addCSS="w-[400px] mr-20  border-b-2 placeholder:italic "
          />
          <TextInput
            //   inputRef={}
            type={"text"}
            label={t("Gender")}
            addCSS="w-[400px] mr-20 border-b-2 placeholder:italic "
          />
          <div class="flex h-full justify-center items-center pt-5 pl-5">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {t("Permission")}
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-1/2 w-full">
        <div className="flex h-16 mb-2 items-center drop-shadow-md font-bold text-3xl">
          {t("Device Information")}
        </div>
        <div className="flex h-full w-full">
          <div className="w-1/2 ">
            <div className="flex font-semibold mb-2 text-[#eb5656] text-xl">
              {t("Right")}
            </div>
            <TextInput
              //   inputRef={}
              type={"text"}
              label={t("Serial Number")}
              addCSS="w-[400px] border-b-2 placeholder:italic "
            />
            <TextInput
              //   inputRef={}
              type={"text"}
              label={t("Device Name")}
              addCSS="w-[400px] border-b-2 placeholder:italic "
            />
            <div className="flex items-center">
              <TextInput
                //   inputRef={}
                type={"text"}
                label={t("Warranty Start Date")}
                addCSS="w-[400px] mr-20  border-b-2 placeholder:italic "
              />
              <label className="font-semibold mr-5" for="duration">
                {t("Warranty Duration")}:
              </label>
              <select className="bg-[#f9faff]" name="duration" id="duration">
                <option>3 {t("Month")} </option>
                <option>6 {t("Month")}</option>
                <option>1 {t("Years")}</option>
                <option>2 {t("Years")}</option>
              </select>
            </div>
          </div>
          <div className="w-1/2 ">
            <div className="flex font-semibold mb-2 text-[#5c8cd9] text-xl">
              {t("Left")}
            </div>
            <TextInput
              //   inputRef={}
              type={"text"}
              label={t("Serial Number")}
              addCSS="w-[400px] border-b-2 placeholder:italic "
            />
            <TextInput
              //   inputRef={}
              type={"text"}
              label={t("Device Name")}
              addCSS="w-[400px] border-b-2 placeholder:italic "
            />
            <div className="flex items-center">
              <TextInput
                //   inputRef={}
                type={"text"}
                label={t("Warranty Start Date")}
                addCSS="w-[400px] mr-20  border-b-2 placeholder:italic "
              />
              <label className="font-semibold mr-5" for="duration">
                {t("Warranty Duration")}:
              </label>
              <select className="bg-[#f9faff]" name="duration" id="duration">
                <option>3 {t("Month")} </option>
                <option>6 {t("Month")}</option>
                <option>1 {t("Years")}</option>
                <option>2 {t("Years")}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[300px] justify-evenly items-center w-full">
        <div className="w-[200px]">
          <Button
            label={t("Cancel")}
            onClick={handleCancelButtonPress}
            addCSS={
              "flex justify-center items-center bg-[#eb5656] hover:bg-[#eb5656]"
            }
          />
        </div>
        <div className="w-[200px]">
          <Button
            label={t("Save")}
            // onClick={handleLoginButtonPress}
            addCSS={
              "flex items-center justify-center bg-green-500 hover:bg-[#273169]"
            }
          />
        </div>
      </div>
    </div>
  )
}

export default AddPatient
