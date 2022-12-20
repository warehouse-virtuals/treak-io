import {
  FiActivity,
  FiCalendar,
  FiGrid,
  FiUsers,
  FiMail,
  FiTool,
} from "react-icons/fi"

const NavbarButtons = (size, className) => {
  return [
    {
      name: "Dashboard",
      icon: <FiGrid size={size} className={className} />,
      pathname: "/dashboard",
      alt: "Dashboard",
      desc: "Glance at your workspace",
    },
    {
      name: "Patients",
      icon: <FiUsers size={size} className={className} />,
      pathname: "/patients",
      alt: "Patients",
      desc: "Track your patient records",
    },
    {
      name: "Agenda",
      icon: <FiCalendar size={size} className={className} />,
      pathname: "/agenda",
      alt: "Agenda",
      desc: "Arrange appointments",
    },
    {
      name: "Repair",
      icon: <FiTool size={size} className={className} />,
      pathname: "/repair",
      alt: "Repair",
      desc: "Track ongoing repairments of aids",
    },
    {
      name: "Chat",
      icon: <FiMail size={size} className={className} />,
      pathname: "/chat",
      alt: "chat",
      desc: "Get in touch with your colleagues",
    },
    {
      name: "Analytics",
      icon: <FiActivity size={size} className={className} />,
      pathname: "/analytics",
      alt: "analytics",
      desc: "Analyze your business statistics",
    },
  ]
}
export default NavbarButtons
