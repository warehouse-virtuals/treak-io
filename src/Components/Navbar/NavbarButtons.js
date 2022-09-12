import {
  FiActivity,
  FiCalendar,
  FiGrid,
  FiUsers,
  FiMail,
  FiTool,
} from "react-icons/fi"

const color = "#F9FAFE"
const size = 22
const NavbarButtons = [
  {
    name: "Dashboard",
    icon: <FiGrid color={color} size={size} className="" />,
    pathname: "/dashboard",
    alt: "Dashboard",
  },
  {
    name: "Patients",
    icon: <FiUsers color={color} size={size} className="" />,
    pathname: "/patients",
    alt: "Patients",
  },
  {
    name: "Agenda",
    icon: <FiCalendar color={color} size={size} className="" />,
    pathname: "/agenda",
    alt: "Agenda",
  },
  {
    name: "Repair",
    icon: <FiTool color={color} size={size} className="" />,
    pathname: "/repair",
    alt: "Repair",
  },
  {
    name: "Messages",
    icon: <FiMail color={color} size={size} className="" />,
    pathname: "/messages",
    alt: "Messages",
  },
  {
    name: "Analytics",
    icon: <FiActivity color={color} size={size} className="" />,
    pathname: "/analytics",
    alt: "Analytics",
  },
]
export default NavbarButtons
