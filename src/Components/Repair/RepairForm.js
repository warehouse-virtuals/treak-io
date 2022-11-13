import { FiUploadCloud, FiPlus } from "react-icons/fi"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import TextInput from "../../UITools/TextInput"
import "./RepairForm.css"

function RepairForm() {
  const { t } = useTranslation("repair")
  const navigate = useNavigate()

  const handleAddPatientButtonClick = async () => {
    try {
      navigate("/repair")
      console.log("Clicked Add Button")
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className='repair-form-container'>
      <div className='repair-form-body'>
        <div className='repair-form-header'>{t("Repair/Maintenance Form")}</div>
        <div className='repair-upload-container'>
          <FiUploadCloud className='mb-3' color='#82878f' size={50} />
          {t("Upload Images")}
        </div>
        <div className='repair-form-first-row'>
          <TextInput
            onInput={null}
            inputRef={null}
            type={"text"}
            label={t("ID")}
            containerCSS='repair-textinput-container'
            labelCSS='login-textinput-label'
            inputCSS='login-textinput-input'
          />

          <TextInput
            onInput={null}
            inputRef={null}
            type={"text"}
            label={t("Name/Surname")}
            containerCSS='repair-textinput-container'
            labelCSS='login-textinput-label'
            inputCSS='login-textinput-input'
          />
        </div>
        <div className='repair-form-first-row '>
          <TextInput
            onInput={null}
            inputRef={null}
            type={"text"}
            label={t("Device Serial No")}
            containerCSS='repair-textinput-container'
            labelCSS='login-textinput-label'
            inputCSS='login-textinput-input'
          />

          <TextInput
            onInput={null}
            inputRef={null}
            type={"text"}
            label={t("Side")}
            containerCSS='repair-textinput-container'
            labelCSS='login-textinput-label'
            inputCSS='login-textinput-input'
          />
        </div>
        <div className='repair-form-first-row'>
          <TextInput
            onInput={null}
            inputRef={null}
            type={"text"}
            label={t("Warranty Start Date")}
            containerCSS='repair-textinput-container'
            labelCSS='login-textinput-label'
            inputCSS='login-textinput-input'
          />
          <TextInput
            onInput={null}
            inputRef={null}
            type={"text"}
            label={t("Warranty Period")}
            containerCSS='repair-textinput-container'
            labelCSS='login-textinput-label'
            inputCSS='login-textinput-input'
          />
        </div>
        <div className='repair-form-first-row'>
          <TextInput
            onInput={null}
            inputRef={null}
            type={"text"}
            label={t("Device Name")}
            containerCSS='repair-textinput-container'
            labelCSS='login-textinput-label'
            inputCSS='login-textinput-input'
          />
          <TextInput
            onInput={null}
            inputRef={null}
            type={"text"}
            label={t("Warranty Finish Date")}
            containerCSS='repair-textinput-container'
            labelCSS='login-textinput-label'
            inputCSS='login-textinput-input'
          />
        </div>
        <div className='repair-form-complaint'>
          <TextInput
            onInput={null}
            inputRef={null}
            type={"text"}
            label={t("Customer Complaint")}
            containerCSS='repair-textinput-complaint-container'
            labelCSS='login-textinput-label'
            inputCSS='login-textinput-input'
          />
        </div>
        <div className='repair-form-findings'>
          <TextInput
            onInput={null}
            inputRef={null}
            type={"text"}
            label={t("Findings")}
            containerCSS='repair-textinput-findings-container'
            labelCSS='login-textinput-label'
            inputCSS='login-textinput-input'
          />
        </div>
        <div className='repair-form-footer'>
          <div className='repair-form-carer-container'>
            <div className='repair-form-carer-title'>{t("Carer")}:</div>
            <div className='repair-form-carer'>Nazlı Aydın</div>
          </div>
          <div className='repair-form-submit-container'>
            <div
              onClick={handleAddPatientButtonClick}
              className='repair-add-repairform-btn'
            >
              <FiPlus size={30} stroke='#a3edd9' className='' /> Form Oluştur
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RepairForm
