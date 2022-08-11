import { FiActivity, FiCalendar, FiGrid, FiUsers, FiMail } from "react-icons/fi"

const NavbarButtons = [
  {
    name: "Dashboard",
    icon: <FiGrid color="#ffffff60" size={22} className="mb-1" />,
    route: "/dashboard",
    alt: "Dashboard",
  },
  {
    name: "Patients",
    icon: <FiUsers color="#ffffff60" size={22} className="mb-1" />,
    route: "/patients",
    alt: "Patients",
  },
  {
    name: "Calender",
    icon: <FiCalendar color="#ffffff60" size={22} className="mb-1" />,
    route: "/calender",
    alt: "Calender",
  },
  {
    name: "Messages",
    icon: <FiMail color="#ffffff60" size={22} className="mb-1" />,
    route: "/messages",
    alt: "Messages",
  },
  {
    name: "Analytics",
    icon: <FiActivity color="#ffffff60" size={22} className="mb-1" />,
    route: "/analytics",
    alt: "Analytics",
  },
]
export default NavbarButtons
