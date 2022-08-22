import { useNavigate } from "react-router-dom"
import { FiLogOut } from "react-icons/fi"
import NavbarButtons from "./NavbarButtons"

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate()
  return (
    <div className="w-32 h-full bg-[#071D34] flex flex-col ">
      <div className="w-full h-5/6">
        <div className="w-full">
          {NavbarButtons.map((button, index) => {
            return (
              <div
                key={button.route}
                className="w-full h-24 flex flex-col justify-center items-center text-[#ffffff60] text-sm hover:border-l-8 hover:text-white border-white transition-all cursor-default ease-out select-none"
                onClick={() => navigate(button.route)}
              >
                {button.icon}
                <div className="">{button.name}</div>
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
          <FiLogOut color="#ffffff60" size={22} className="mb-1" />
          <div className="text-white text-sm">{"Logout"}</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
