import {
  FiActivity,
  FiCalendar,
  FiGrid,
  FiUsers,
  FiMail,
  FiTool,
} from "react-icons/fi"

const NavbarButtons = [
  {
    name: "Dashboard",
    icon: <FiGrid color="#F9FAFE" size={22} className="mb-1" />,
    route: "/dashboard",
    alt: "Dashboard",
  },
  {
    name: "Patients",
    icon: <FiUsers color="#F9FAFE" size={22} className="mb-1" />,
    route: "/patients",
    alt: "Patients",
  },
  {
    name: "Scheduler",
    icon: <FiCalendar color="#F9FAFE" size={22} className="mb-1" />,
    route: "/scheduler",
    alt: "Scheduler",
  },
  {
    name: "Repair",
    icon: <FiTool color="#F9FAFE" size={22} className="mb-1" />,
    route: "/repair",
    alt: "Repair",
  },
  {
    name: "Messages",
    icon: <FiMail color="#F9FAFE" size={22} className="mb-1" />,
    route: "/messages",
    alt: "Messages",
  },
  {
    name: "Analytics",
    icon: <FiActivity color="#F9FAFE" size={22} className="mb-1" />,
    route: "/analytics",
    alt: "Analytics",
  },
]
export default NavbarButtons
