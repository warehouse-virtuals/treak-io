import { useNavigate } from "react-router-dom"
import { FiLogOut } from "react-icons/fi"
import { GiHealthNormal } from "react-icons/gi"
import NavbarButtons from "./NavbarButtons"

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate()
  return (
    <div className="w-40 h-full bg-[#605bff] flex flex-col justify-center items-center">
      <GiHealthNormal size={50} color="#FFFFFF" className="mt-10" />
      <div className="flex w-full h-5/6 items-center">
        <div className="w-full">
          {NavbarButtons.map((button, index) => {
            return (
              <div
                key={button.route}
                className=" w-full h-24 flex flex-col justify-center items-center text-[#ffffff60] text-sm hover:border-l-8 transition-all cursor-default ease-out select-none"
                onClick={() => navigate(button.route)}
              >
                {button.icon}
                {/* <div className="">{button.name}</div> */}
              </div>
            )
          })}
        </div>
      </div>
      <div className="w-full h-1/6 flex flex-col justify-end">
        <div
          onClick={onLogout}
          className="w-full h-24 flex flex-col justify-center items-center hover:border-l-8  border-white transition-all cursor-default ease-out select-none"
        >
          <FiLogOut color="#F9FAFE" size={22} className="mb-1" />
          {/* <div className="text-white text-sm">{"Logout"}</div> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
