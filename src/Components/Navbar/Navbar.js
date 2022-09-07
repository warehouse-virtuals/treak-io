import { useLocation, useNavigate } from "react-router-dom"
import { UserAuth } from "../../Context/AuthContext"
import { FiLogOut } from "react-icons/fi"

import NavbarButtons from "./NavbarButtons"
import whlogo from "../../Assets/logobw.svg"

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { user, logout } = UserAuth()

  const handleNavbarLogoutButtonClick = async () => {
    try {
      await logout()
      navigate("/login")
      console.log("Logged out from: " + user.email)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="w-28 h-full rounded-tr-3xl bg-[#20295a] flex flex-col justify-center items-center">
      {/* <GiHealthNormal size={50} color="#FFFFFF" className="mt-10" /> */}
      <img className="mt-10 w-1/2 " alt="logo" src={whlogo} />
      <div className="flex w-full h-5/6 items-center">
        <div className="w-full">
          {NavbarButtons.map((button, index) => {
            return (
              <div
                key={button.pathname}
                className=" w-full h-24 flex flex-col justify-center items-center text-[#20295a] hover:text-white text-sm  transition-all cursor-default ease-out select-none"
                onClick={() => navigate(button.pathname)}
              >
                <div
                  className={`p-3 mb-1 ${
                    location.pathname === button.pathname ? "bg-[#59e2f7]" : ""
                  }  rounded-2xl`}
                >
                  {button.icon}
                </div>

                <div className="">{button.name}</div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="w-full h-1/6 flex flex-col justify-end">
        <div
          onClick={handleNavbarLogoutButtonClick}
          className="w-full h-24 flex flex-col justify-center items-center text-[#20295a] hover:text-white  transition-all cursor-default ease-out select-none"
        >
          <FiLogOut color="#F9FAFE" size={22} className=" mb-1" />
          <div className="">Logout</div>
          {/* <div className="text-white text-sm">{"Logout"}</div> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
