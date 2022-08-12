import { FiPlusCircle } from "react-icons/fi"

const CardIcons = {
  FiPlusCircle: {
    icon: (
      <FiPlusCircle
        className="bg-[#2E6BE6] rounded-3xl "
        color="#ffffff60"
        size={40}
        stroke="#b6cfff"
      />
    ),
    route: "/addPatient",
  },
  FiPlusCircle2: {
    icon: (
      <FiPlusCircle
        className="bg-[##c25ff8] rounded-3xl "
        color="#ffffff60"
        size={40}
        stroke="#b6cfff"
      />
    ),
    route: "/makeAppointment",
  },
}
export default CardIcons
