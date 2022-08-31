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
    icon: <FiGrid color="#F9FAFE" size={22} className="" />,
    pathname: "/dashboard",
    alt: "Dashboard",
  },
  {
    name: "Patients",
    icon: <FiUsers color="#F9FAFE" size={22} className="" />,
    pathname: "/patients",
    alt: "Patients",
  },
  {
    name: "Scheduler",
    icon: <FiCalendar color="#F9FAFE" size={22} className="" />,
    pathname: "/scheduler",
    alt: "Scheduler",
  },
  {
    name: "Repair",
    icon: <FiTool color="#F9FAFE" size={22} className="" />,
    pathname: "/repair",
    alt: "Repair",
  },
  {
    name: "Messages",
    icon: <FiMail color="#F9FAFE" size={22} className="" />,
    pathname: "/messages",
    alt: "Messages",
  },
  {
    name: "Analytics",
    icon: <FiActivity color="#F9FAFE" size={22} className="" />,
    pathname: "/analytics",
    alt: "Analytics",
  },
]
export default NavbarButtons
