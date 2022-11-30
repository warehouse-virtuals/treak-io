import {
  FiActivity,
  FiCalendar,
  FiGrid,
  FiUsers,
  FiMail,
  FiTool,
} from "react-icons/fi"

const NavbarButtons = (color, size, className) => {
  return [
    {
      name: "Dashboard",
      icon: <FiGrid color={color} size={size} className={className} />,
      pathname: "/dashboard",
      alt: "Dashboard",
      desc: "Glance at your workspace",
    },
    {
      name: "Patients",
      icon: <FiUsers color={color} size={size} className={className} />,
      pathname: "/patients",
      alt: "Patients",
      desc: "Track your patient records",
    },
    {
      name: "Agenda",
      icon: <FiCalendar color={color} size={size} className={className} />,
      pathname: "/agenda",
      alt: "Agenda",
      desc: "Arrange appointments",
    },
    {
      name: "Repair",
      icon: <FiTool color={color} size={size} className={className} />,
      pathname: "/repair",
      alt: "Repair",
      desc: "Track ongoing repairments of aids",
    },
    {
      name: "Messages",
      icon: <FiMail color={color} size={size} className={className} />,
      pathname: "/messages",
      alt: "messages",
      desc: "Get in touch with your colleagues",
    },
    {
      name: "Analytics",
      icon: <FiActivity color={color} size={size} className={className} />,
      pathname: "/analytics",
      alt: "analytics",
      desc: "Analyze your business statistics",
    },
  ]
}
export default NavbarButtons
